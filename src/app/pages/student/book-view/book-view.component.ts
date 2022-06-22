import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
})
export class BookViewComponent implements OnInit {
  chapterId: any = '';
  lesson: any = '';
  counter = [];
  reportData: any;
  reportType = 'pre';
  questionsPreviewType = '';
  userType = '';
  hodMode: any;
  previousStatus: any;
  learningOutcomes = []
  constructor(
    private activatedRouter: ActivatedRoute,
    private communicationsService: CommunicationService,
    private authService: AuthService
  ) {}


  ngOnInit(): void {
    this.previousStatus = localStorage.getItem('previousData');
    this.hodMode = localStorage.getItem('HODMODE');
    console.log(this.hodMode);
    this.userType = this.authService.activeUser.userType;
    console.log('userType is', this.userType);
    this.activatedRouter.params.subscribe((params) => {
      this.chapterId = params['id'];
      localStorage.setItem('lessonId', this.chapterId);
      console.log(this.chapterId);
      this.getPreAssesmentReports();
      this.getLearningOutcomes();

    });
  }

  changeActiveLesson($event) {
    this.lesson = $event;
    this.topFunction();
  }

  getLearningOutcomes(){
    this.communicationsService.executePOSTAPI(APIStandars.student.listOutcomes, {chapterId:this.chapterId}).subscribe((data:any)=>{
      this.learningOutcomes = data
    })
  }

  onAnswerSubmit($event){
this.counter=[...[1020,20,30]]
  }
  getPreAssesmentReports() {
    console.log("data",this.previousStatus);
    if (this.hodMode == 'true') {
      this.communicationsService
        .executePOSTAPI(APIStandars.HOD.getSupportLesson, {
          parentLessonId: this.chapterId,
        })
        .subscribe((data) => {
          console.log(data);
        });
    } else {
      
        this.communicationsService
          .executePOSTAPI(APIStandars.getStudentReportForStudentAPI, {
            lessonId: this.chapterId,
            lessonType: '19',
          })
          .subscribe((data) => {
            console.log(data);

            this.reportData = data;
          });
      
    }
  }

  loadReport($event) {
    console.log("data",this.previousStatus);
    
    
      this.lesson = '';
      if ($event == 'self') {
        this.reportType = 'self';
        this.communicationsService
          .executePOSTAPI(APIStandars.getStudentReportForStudentAPI, {
            lessonId: this.chapterId,
            lessonType: '18',
          })
          .subscribe((data) => {
            console.log(data);
            this.reportData = data[0];
          });
      }
      if ($event == 'post') {
        this.reportType = 'post';
        this.communicationsService
          .executePOSTAPI(APIStandars.getStudentReportForStudentAPI, {
            lessonId: this.chapterId,
            lessonType: '20',
          })
          .subscribe((data) => {
            console.log(data);
            this.reportData = data;
          });
      }
    
  }

  loadPreview($event) {
    this.lesson = '';
    this.reportType = '';
    this.questionsPreviewType = $event;
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
