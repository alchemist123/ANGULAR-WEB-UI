import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { BatchDetailsComponent } from '../batch-details/batch-details.component';

@Component({
  selector: 'app-batch-code',
  templateUrl: './batch-code.component.html',
  styleUrls: ['./batch-code.component.css']
})
export class BatchCodeComponent implements OnInit {
  batchForm:any
  status: Object;
  userType: string;
  constructor(private fb:FormBuilder, private comService: CommunicationService, private notify: NotificationsService,  private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any,private dialogRef: MatDialogRef<BatchDetailsComponent>) {
      console.log(val.batchId);
      
     }

  ngOnInit(): void {
    this.userType = localStorage.getItem("userType")
    this.batchForm = this.fb.group({
      code:["", Validators.required]
    }
    )
  }
  joinedUseCode(){
    if(this.userType=='teacher'){
      let formValue = this.batchForm.value
    this.comService.executePOSTAPI(APIStandars.joinedUseCode,{code:this.batchForm.value.code, batchId:this.val.batchId}).subscribe(
      (data)=>{
        console.log(data);
        this.status = data["status"]
        this.notify.showSuccess("Success","")
        this.dialog.closeAll()
        this.dialogRef.close({ data:this.status })
  
       
       
      },
      (err)=>{
        this.notify.showDanger("Failed", "")
      }
    )
    }
    else{
      let formValue = this.batchForm.value
    this.comService.executePOSTAPI(APIStandars.joinedUseCodeStudent,{code:this.batchForm.value.code, batchId:this.val.batchId}).subscribe(
      (data)=>{
        console.log(data);
        this.status = data["status"]
        this.notify.showSuccess("Success","")
        this.dialog.closeAll()
        this.dialogRef.close({ data:this.status })
  
       
       
      },
      (err)=>{
        this.notify.showDanger("Failed", "")
      }
    )
    }
    
  }

}
