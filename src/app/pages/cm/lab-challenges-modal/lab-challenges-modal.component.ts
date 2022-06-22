import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-lab-challenges-modal',
  templateUrl: './lab-challenges-modal.component.html',
  styleUrls: ['./lab-challenges-modal.component.css']
})
export class LabChallengesModalComponent implements OnInit {
  challengeForm: any;

  constructor(private fb:FormBuilder, private comService: CommunicationService, private notify: NotificationsService,  private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any) { 
      console.log(val);
      
    }

  ngOnInit(): void {

    this.challengeForm = this.fb.group({
      challengeName:["",[Validators.required]],
      instruction:["",[Validators.required]]
    })
  }

  createChallenge(){
    let formValues = this.challengeForm.value
    console.log(formValues);

    this.comService.executePOSTAPI(APIStandars.createChallenge,{challengeName:this.challengeForm.value.challengeName,instruction:this.challengeForm.value.instruction,parentLessonId:this.val._id}).subscribe(
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
