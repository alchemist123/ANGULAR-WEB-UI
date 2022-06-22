import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-cm-feedback-modal',
  templateUrl: './cm-feedback-modal.component.html',
  styleUrls: ['./cm-feedback-modal.component.css']
})
export class CmFeedbackModalComponent implements OnInit {
  feedbackForm:any

  constructor(private fb:FormBuilder,private communicationsService:CommunicationService, private dialog : MatDialog,private notify: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(this.val._id);
      
     }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      remark:["",[Validators.required]]
    }
    )
  }
  reviewFeedback(){
    this.communicationsService.executePOSTAPI(APIStandars.reviewFeedback,{...this.feedbackForm.value, feedbackId:this.val._id}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
        this.dialog.closeAll()
      },
      (err)=>{
        this.notify.showDanger("Failed", "")
      }
    )
  }

}
