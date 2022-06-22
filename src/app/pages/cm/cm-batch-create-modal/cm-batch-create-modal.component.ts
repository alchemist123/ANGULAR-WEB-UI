import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-cm-batch-create-modal',
  templateUrl: './cm-batch-create-modal.component.html',
  styleUrls: ['./cm-batch-create-modal.component.css']
})
export class CmBatchCreateModalComponent implements OnInit {
  batchForm:any
  teachers: any;

  constructor(private dialogRef:MatDialog, private comService: CommunicationService,private fb:FormBuilder,private notify: NotificationsService) { }

  ngOnInit(): void {
    this.batchForm = this.fb.group({
      mentorId:["", Validators.required],
      batchName:["",Validators.required],
      description:["", Validators.required],
      limit:["", Validators.required],
      startDate:["", Validators.required],
      endDate:["", Validators.required]
    })
    this.listTeacher()
  }
  listTeacher(){
    this.comService.executePOSTAPI(APIStandars.listLevelUpTeachers,{}).subscribe(
      (data)=>{
        console.log(data);
        this.teachers = data
      }
    )
  }

  createBatch(){
    console.log(this.batchForm.value);
    let formValue = this.batchForm.value
    this.comService.executePOSTAPI(APIStandars.createBatch,formValue).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
        this.dialogRef.closeAll()
      },
      (err)=>{
        this.notify.showDanger("Failed", "")
      }
    )
    
  }

}
