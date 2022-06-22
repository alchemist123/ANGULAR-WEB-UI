import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-teacher-subject-selection-mode-modal',
  templateUrl: './teacher-subject-selection-mode-modal.component.html',
  styleUrls: ['./teacher-subject-selection-mode-modal.component.css']
})
export class TeacherSubjectSelectionModeModalComponent implements OnInit {

  modeForm:any

  constructor(private fb:FormBuilder, private comService: CommunicationService,private dialog : MatDialog, private activatedRouter: ActivatedRoute,private notify: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val.subjectId);
      
     }

  ngOnInit(): void {
    this.modeForm = this.fb.group({
      mode:["", Validators.required]
    })
  }

  updateMode(){
    this.comService.executePOSTAPI(APIStandars.updateMode,{mode:this.modeForm.value.mode, parentLessonId:this.val.subjectId}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Added","")
          this.dialog.closeAll()
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
