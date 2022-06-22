import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-student-deactivate-confirmation-modal',
  templateUrl: './student-deactivate-confirmation-modal.component.html',
  styleUrls: ['./student-deactivate-confirmation-modal.component.css']
})
export class StudentDeactivateConfirmationModalComponent implements OnInit {

  constructor(private comService:CommunicationService,private dialog:MatDialog,private notify: NotificationsService,@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(this.data.studentId);
    
  }

  ngOnInit(): void {
  }
  removeStudent(){
      this.comService.executePOSTAPI(APIStandars.classTeacher.removeStudent,{studentId:this.data.studentId}).subscribe(
        (data)=>{
          console.log(data);
          this.notify.showSuccess("Deleted","")
          this.dialog.closeAll()
        },
        (err)=>{
          this.notify.showDanger("Failed", "Failed to complete operation.")
        }
      )
    }
}
