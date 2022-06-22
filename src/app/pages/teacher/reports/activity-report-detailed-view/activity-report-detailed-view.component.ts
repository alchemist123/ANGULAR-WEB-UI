import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { ActivityReviewRejectCommentModalComponent } from '../activity-review-reject-comment-modal/activity-review-reject-comment-modal.component';

@Component({
  selector: 'app-activity-report-detailed-view',
  templateUrl: './activity-report-detailed-view.component.html',
  styleUrls: ['./activity-report-detailed-view.component.css']
})
export class ActivityReportDetailedViewComponent implements OnInit {

  activityDetails: any;
  contentId: any;
  status: any;
  type: any;
  answers: any;
  typeValue: any;
  standardId: any;
  divisionId: any;
  lessonId: any;
  constructor(private communicationsService:CommunicationService, private activatedRouter: ActivatedRoute, private dialog:MatDialog, private notify: NotificationsService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(
      (data)=>{
        this.contentId = data["contentId"]
        //this.status = data["status"]
        this.type = data["type"]
        console.log("status",this.status);
        this.standardId = localStorage.getItem("standardId")
        this.divisionId = localStorage.getItem("divisionId")
        this.lessonId = localStorage.getItem("activityLessonId")
      }
    )

    this.activityDetails = JSON.parse(localStorage.getItem('activityDetails'))
    console.log(this.activityDetails);
    this.getOverViewReports()
  }

  getOverViewReports(){
    if(this.type == '17'){
      this.communicationsService.executePOSTAPI(APIStandars.getOverviewMarksReportForTeacher,{lessonId:this.lessonId, lessonType:"17", standardId: this.standardId, divisionId: this.divisionId }).subscribe((data:any) => {
        this.status = data["data"][0]["status"]
        console.log(this.answers);
        
       
    })
    }
    else{
      this.communicationsService.executePOSTAPI(APIStandars.getOverviewMarksReportForTeacher,{lessonId:this.lessonId, lessonType:"14", standardId: this.standardId, divisionId: this.divisionId }).subscribe((data:any) => {
        this.answers = data["data"]
        this.status = data["data"][0]["status"]
    })
    }
  }

  reviewActivityAccept(){
    this.communicationsService.executePOSTAPI(APIStandars.reviewActivity,{status:"1", contentId:this.contentId }).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","You have accepted.")
        this.getOverViewReports()
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete the operation")
      }
    )
  }

  reviewActivityReject(){
    var dialogRef = this.dialog.open(ActivityReviewRejectCommentModalComponent,{
      data:{contentId:this.contentId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
      this.getOverViewReports()
      
      }
    )
  }

}
