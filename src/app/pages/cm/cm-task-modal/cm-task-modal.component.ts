import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-cm-task-modal',
  templateUrl: './cm-task-modal.component.html',
  styleUrls: ['./cm-task-modal.component.css']
})
export class CmTaskModalComponent implements OnInit {
  taskForm: any;

  constructor(private fb:FormBuilder, private comService: CommunicationService, private notify: NotificationsService,  private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val._id);
      
     }

  ngOnInit(): void {
    
    this.taskForm = this.fb.group({
      taskName:["",[Validators.required]],
      instruction:["",[Validators.required]],
      point:["",[Validators.required]]
    })

  }

  createTask(){
    let formValues = this.taskForm.value
    this.comService.executePOSTAPI(APIStandars.createTask,{taskName:this.taskForm.value.taskName, instruction:this.taskForm.value.instruction, point:this.taskForm.value.point, challengeId:this.val._id}).subscribe(
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
