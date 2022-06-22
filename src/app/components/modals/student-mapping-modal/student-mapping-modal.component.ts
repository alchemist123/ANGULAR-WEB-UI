import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from "../../../../services/notifications/notifications.service"
declare var $:any;

@Component({
  selector: 'app-student-mapping-modal',
  templateUrl: './student-mapping-modal.component.html',
  styleUrls: ['./student-mapping-modal.component.css']
})
export class StudentMappingModalComponent implements OnInit {

  @Input() dataTarget="" 
  @Input() selectedStudent:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
  studentMappingForm: any;
  selectedDate:any;
  dob: any;
  stds: any = []
  divs: any = []
  studentList: any = []

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

    this.comService.executePOSTAPI(APIStandars.listStudentAPI,{}).subscribe(
      (data)=>{
        this.studentList = data
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
    if(this.selectedStudent==""){
      this.selectedStudent = {
        studentDetails: {},
        studentId:"",
        standardId:"",
        divisionId:""
      }
    }
    this.studentMappingForm = this.fb.group({
      standardId:[this.selectedStudent.standardId, Validators.required],
      divisionId: [this.selectedStudent.divisionId, Validators.required],
      studentId: [this.selectedStudent.studentId, Validators.required]
    })
    
  
  }

  


  assignStudent(){
    let formValue = this.studentMappingForm.value
    if(this.selectedStudent!=""){
      formValue = {...formValue, "id":this.selectedStudent._id}
    }
    this.comService.executePOSTAPI(APIStandars.mapStudentsAPI, formValue).subscribe(
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
