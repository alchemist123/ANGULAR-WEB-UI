import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-task-media-upload-modal',
  templateUrl: './task-media-upload-modal.component.html',
  styleUrls: ['./task-media-upload-modal.component.css']
})
export class TaskMediaUploadModalComponent implements OnInit {
  taskForm:any
  userType: any;
  uploadedFileBase64:any;

  constructor(private fb:FormBuilder,private comService: CommunicationService,private notify: NotificationsService,private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any) { 
      console.log(val._id);
      
    }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      comments:["",[Validators.required]],
      contentType:["",[Validators.required]],
      inputFile:["",[Validators.required]],
      code:["",[]]
    }

    )
    this.userType = localStorage.getItem("userType")
    console.log(this.userType)
  }

  handleUpload(event) {
    console.log("selected event")
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
    //console.log(reader.result);
    this.uploadedFileBase64 = reader.result;
    };
}

  taskSubmission(){
    if(this.userType == 'student'){
      this.comService.executePOSTAPI(APIStandars.taskSubmission,{taskId:this.val._id, comment:this.taskForm.value.comments, contentType:this.taskForm.value.contentType, file:this.uploadedFileBase64, code:this.taskForm.value.code, media_type:'0'}).subscribe(
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
    else
    {
      this.comService.executePOSTAPI(APIStandars.taskTeacherSubmission,{taskId:this.val._id, comment:this.taskForm.value.comments, contentType:this.taskForm.value.contentType, file:this.uploadedFileBase64, code:this.taskForm.value.code, media_type:'0'}).subscribe(
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

}
