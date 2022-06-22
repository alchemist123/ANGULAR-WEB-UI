import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-student-transfer-modal',
  templateUrl: './student-transfer-modal.component.html',
  styleUrls: ['./student-transfer-modal.component.css']
})
export class StudentTransferModalComponent implements OnInit {

  constructor(private dialogRef:MatDialog, private comService: CommunicationService,private fb:FormBuilder,private notify: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val.studentId);
      
     }

  ngOnInit(): void {
  }

  studentTransfer(){
    this.comService.executePOSTAPI(APIStandars.premotion,{studentId:this.val.studentId, status:'1'}).subscribe(
     (data)=>{
       console.log(data);
       this.notify.showSuccess("Success","You are successfully promoted these students.")
       this.dialogRef.closeAll()
     },
     (err)=>{
       this.notify.showDanger("Failed", "Failed to complete operation.")
     }
   )
  }

}
