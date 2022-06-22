import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-assesment-question-reports',
  templateUrl: './assesment-question-reports.component.html',
  styleUrls: ['./assesment-question-reports.component.css']
})
export class AssesmentQuestionReportsComponent implements OnInit {

  lessonId: string;
  studentId: string;
  lessonType: string;
  reportData:any = [];
  data: any;
  constructor(private activatedRouter: ActivatedRoute,
              private comService: CommunicationService
    ) {

   }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params)=>{
      this.lessonId = params['lessonId']
      this.studentId = params['studentId']
      this.lessonType = params['type']
      this.getReport()
    })
  }

  getReport(){
    this.comService.executePOSTAPI(APIStandars.getStudentReportsForParentAPI,{lessonId:this.lessonId, studentId:this.studentId, lessonType:this.lessonType}).subscribe((data:any)=>{
      if(this.reportData.length == 0){
        this.data = "No data to display"
      }
      this.reportData = data;
    })
  }

}
