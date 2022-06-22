import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-digital-skill-teacher-mapping-modal',
  templateUrl: './digital-skill-teacher-mapping-modal.component.html',
  styleUrls: ['./digital-skill-teacher-mapping-modal.component.css']
})
export class DigitalSkillTeacherMappingModalComponent implements OnInit {

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

  constructor(private fb: FormBuilder, private notify: NotificationsService, private comService: CommunicationService) {

   }

   ngOnChanges(){
     this.initForms()
     this.getExistingData()
   }

   getExistingData(){
     this.comService.executePOSTAPI(APIStandars.listStandardAPI,{}).subscribe(
       (data)=>{
         this.stds = data
       },
       (err)=>{
         this.notify.showDanger("Failed", "Failed to fetch data from server.")
       }
     )

     this.comService.executePOSTAPI(APIStandars.listDivisionAPI,{}).subscribe(
      (data)=>{
        this.divs = data
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to fetch data from server.")
      }
    )

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
        mentorId:"",
        standardId:"",
        divisionId:"",
      }
    }
    this.teacherMappingForm = this.fb.group({
      standardId:[this.selectedTeacher.standardId, Validators.required],
      divisionId: [this.selectedTeacher.divisionId, Validators.required],
      mentorId: [this.selectedTeacher.mentorId, Validators.required],
      
    })
  }

  


  assignTeacher(){
    let formValue = this.teacherMappingForm.value
    if(this.selectedTeacher!=""){
      formValue = {...formValue, "id":this.selectedTeacher._id}
    }
    this.comService.executePOSTAPI(APIStandars.assignDigitalSkillMentorForSchoolAPI, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Student mapping has been saved.")
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
