import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-digital-skill-mentor-mapping',
  templateUrl: './digital-skill-mentor-mapping.component.html',
  styleUrls: ['./digital-skill-mentor-mapping.component.css']
})
export class DigitalSkillMentorMappingComponent implements OnInit {

  @Input() dataTarget="" 
  @Input() selectedTeacher:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
  teacherMappingForm: any;
  selectedDate:any;
  dob: any;
  stds: any = []
  divs: any = []
  subjects: any = []
  teachersList: any = []
  query:any
  constructor(private fb: FormBuilder, private notify: NotificationsService, private comService: CommunicationService, private dialog : MatDialog) {

   }

   ngOnChanges(){
     this.initForms()
     this.getExistingData()
   }

   getExistingData(){
    this.comService.executePOSTAPI(APIStandars.listTeacherAPI,{}).subscribe(
      (data)=>{
        this.teachersList = data
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to fetch data from server.")
      }
    )
   }

  ngOnInit(): void {
    this.initForms()
    this.getExistingData()
  }


  initForms()
  {
    if(this.selectedTeacher==""){
      this.selectedTeacher = {
        teacherDetails: {},
        teacherId:"",
      }
    }
    this.teacherMappingForm = this.fb.group({
      teacherId: [this.selectedTeacher.teacherId, Validators.required],
    })
  }




  assignTeacher(){
    let formValue = this.teacherMappingForm.value
    if(this.selectedTeacher!=""){
      formValue = {...formValue, "id":this.selectedTeacher._id}
    }
    this.comService.executePOSTAPI(APIStandars.assignMentorTeachers, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Mentor mapping has been saved.")
        this.formSubmitted.emit("form submitted")
        this.dialog.closeAll()
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }
}


