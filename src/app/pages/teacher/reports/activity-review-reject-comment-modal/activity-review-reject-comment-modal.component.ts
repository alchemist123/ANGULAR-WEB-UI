import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-activity-review-reject-comment-modal',
  templateUrl: './activity-review-reject-comment-modal.component.html',
  styleUrls: ['./activity-review-reject-comment-modal.component.css']
})
export class ActivityReviewRejectCommentModalComponent implements OnInit {

  remarkForm:any

  constructor(private fb:FormBuilder, private comService:CommunicationService, private notify: NotificationsService, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val.contentId);
      
     }

  ngOnInit(): void {
    this.remarkForm = this.fb.group({
      remark:['',Validators.required]
    }
    )
  }

  reviewActivityReject(){
    if(this.remarkForm.valid){
      this.comService.executePOSTAPI(APIStandars.reviewActivity,{status:"2", contentId:this.val.contentId,remark:this.remarkForm.value.remark}).subscribe(
        (data)=>{
          console.log(data);
          this.notify.showSuccess("Success","You have successfully reviewed.")
          this.dialog.closeAll()
        },
        (err)=>{
          this.notify.showDanger("Failed", "Failed to complete operation.")
        }
      )
    }
  }

}
