import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-student-not-attended-modal',
  templateUrl: './student-not-attended-modal.component.html',
  styleUrls: ['./student-not-attended-modal.component.css']
})
export class StudentNotAttendedModalComponent implements OnInit {
  studentlistNot: any;
  displayedColumns: string[] = ['No','Name','Mobile Number']
  constructor(private communicationsService:CommunicationService,@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(this.data.lessonId, this.data.standardId, this.data.divisionId, this.data.user, this.data.type);
    
  }

  ngOnInit(): void {
    this.getOverViewReports()
    this.getOverViewReportss()
  }

  getOverViewReports(){
    
        this.communicationsService.executePOSTAPI(APIStandars.getOverviewMarksReportForTeacher,{lessonId:this.data.lessonId, lessonType:this.data.type, standardId: this.data.standardId, divisionId: this.data.divisionId }).subscribe((data:any) => {
        this.studentlistNot = data["notYet"]
        console.log(this.studentlistNot)
    })
  }

  getOverViewReportss() {
    this.communicationsService
      .executePOSTAPI(APIStandars.getOverviewMarksReportForTeacher, {lessonId:this.data.lessonId, lessonType:'18', standardId: this.data.standardId, divisionId: this.data.divisionId })
      .subscribe((data: any) => {
        this.studentlistNot = data['notYet'];
      });
  }
}
