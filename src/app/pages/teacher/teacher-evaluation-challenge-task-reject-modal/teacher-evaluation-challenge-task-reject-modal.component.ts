import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-teacher-evaluation-challenge-task-reject-modal',
  templateUrl: './teacher-evaluation-challenge-task-reject-modal.component.html',
  styleUrls: ['./teacher-evaluation-challenge-task-reject-modal.component.css']
})
export class TeacherEvaluationChallengeTaskRejectModalComponent implements OnInit {
  feedbackForm: any;

  constructor(private fb:FormBuilder, private comService: CommunicationService,private dialog : MatDialog,private notify: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val.id);
      
     }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      feedback:['',Validators.required],

    })
  }
  
  reviewLabTaskReject(){
   
    this.comService.executePOSTAPI(APIStandars.reviewLabTask,{remark:this.feedbackForm.value.feedback ,status:'2',id:this.val.id}).subscribe(
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
