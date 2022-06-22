import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-detailed-student-answers-view',
  templateUrl: './detailed-student-answers-view.component.html',
  styleUrls: ['./detailed-student-answers-view.component.css']
})
export class DetailedStudentAnswersViewComponent implements OnInit {

  studentId: any;
  lessonId: any;
  lessonType: any;
  detailedAnswers = []
  constructor(private communicationsService:CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe((data) => {
      this.studentId = data["studentId"]
      this.lessonId = data["lessonId"]
      this.lessonType = data["type"]
      this.getDetailedAnswers()
    })
  }

  getDetailedAnswers(){
    this.communicationsService.executePOSTAPI(APIStandars.getDetailedStudentAnswersForTeacherAPI, {lessonId:this.lessonId, lessonType: this.lessonType,studentId: this.studentId }).subscribe(
      (data:any)=>{
          this.detailedAnswers = data
      }
    )
  }

}
