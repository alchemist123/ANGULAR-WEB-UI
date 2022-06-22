import { Component, Input, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-submission-history',
  templateUrl: './submission-history.component.html',
  styleUrls: ['./submission-history.component.css']
})
export class SubmissionHistoryComponent implements OnInit {
  @Input() assignmentId="";
  assignmentHistoryData:any=[]
  constructor(private comService:CommunicationService, private authService:AuthService) { }

  ngOnInit(): void {
    console.log({assignid: this.assignmentId})
    this.getSubmissionHistory()
  }

  getSubmissionHistory(){
    let url = this.authService.activeUser.userType == "student" ? APIStandars.getAssignmtnStatusForStudentAPI : APIStandars.getAssignmentStatusForTeacherAPI
    this.comService.executePOSTAPI(url,{assignmentId: this.assignmentId}).subscribe((data)=>{
      this.assignmentHistoryData = data
    })
  }

}
