import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-hod-book-view',
  templateUrl: './hod-book-view.component.html',
  styleUrls: ['./hod-book-view.component.css'],
})
export class HodBookViewComponent implements OnInit {
  chapterId: any = '';
  lesson: any = '';
  counter = [];
  reportData: any;
  reportType = 'pre';
  questionsPreviewType = '';
  userType = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private communicationsService: CommunicationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userType = this.authService.activeUser.userType;
    console.log('userType is', this.userType);
    this.activatedRouter.params.subscribe((params) => {
      this.chapterId = params['id'];
      console.log(this.chapterId);
      this.getPreAssesmentReports();
      this.listContent()
    });
  }

  changeActiveLesson($event) {
    this.lesson = $event;
  }

  onAnswerSubmit($event) {
    console.log('incrimentingCounter');
    this.counter = [...[1020, 20, 30]];
  }

  getPreAssesmentReports() {
    this.communicationsService.executePOSTAPI(APIStandars.HOD.getSupportLesson, {
        parentLessonId: this.chapterId,
      })
      .subscribe((data) => {
        console.log(data);
        this.reportData = data;
      });
  }

  listContent(){
    this.communicationsService.executePOSTAPI(APIStandars.HOD.listContent,{lessonId: this.chapterId}).subscribe(
      (data)=>{
        console.log(data);
        
      })
  }

  loadReport($event) {
    this.communicationsService.executePOSTAPI(APIStandars.HOD.listContent, { lessonId: this.chapterId })
      .subscribe((data) => {
        console.log(data);
        this.reportData = data[0];
      });
  }

  loadPreview($event) {
    this.lesson = '';
    this.reportType = '';
    this.questionsPreviewType = $event;
  }
}
