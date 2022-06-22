import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-lab-new-course-modal',
  templateUrl: './lab-new-course-modal.component.html',
  styleUrls: ['./lab-new-course-modal.component.css']
})
export class LabNewCourseModalComponent implements OnInit {

  courseForm:any

  constructor(private fb:FormBuilder, private comService: CommunicationService, private notify: NotificationsService,  private dialog : MatDialog) { }

  ngOnInit(): void {

    this.courseForm = this.fb.group({
      courseName:["",[Validators.required]],
      courseDescr:["",[Validators.required]]
    })
  }

  createCourse(){
    let formValues = this.courseForm.value
    console.log(formValues);
    
    this.comService.executePOSTAPI(APIStandars.createLabLesson,{lessonName:this.courseForm.value.courseName, description:this.courseForm.value.courseDescr}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
        this.dialog.closeAll()
      },(err)=>{
        this.notify.showDanger("Failed", "")
      }
      
    )
  }

}
