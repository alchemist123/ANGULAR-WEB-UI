import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from "../../../../services/notifications/notifications.service"
declare var $:any;

@Component({
  selector: 'app-teacher-mapping-modal',
  templateUrl: './teacher-mapping-modal.component.html',
  styleUrls: ['./teacher-mapping-modal.component.css']
})
export class TeacherMappingModalComponent implements OnInit {

  @Input() dataTarget="" 
  //@Input() selectedTeacher:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
  teacherMappingForm: any;
  selectedDate:any;
  dob: any;
  stds: any = []
  divs: any = []
  subjects: any = []
  teachersList: any = []
  query:any
  teacherFName: any;
  teacherLName: any;
  standard: any;
  division: any;
  subject: any;
  teacher_Id: any;
  mapingData: any;
  selectedTeacher:any
  constructor(private fb: FormBuilder, private notify: NotificationsService, private comService: CommunicationService, private dialog:MatDialog, 
    @Inject(MAT_DIALOG_DATA) public val: any) {
      this.teacherFName = val.teacherFName
      this.teacherLName = val.teacherLName
      this.standard = val.standard
      this.division = val.division
      this.subject = val.subject
      this.teacher_Id = val.teacher_Id
      this.selectedTeacher = val.maping
      console.log(this.mapingData);
      
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
        console.log("da",data);
        
        this.teachersList = data
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to fetch data from server.")
      }
    )

    this.comService.executePOSTAPI(APIStandars.listSubjectAPI,{}).subscribe(
      (data)=>{
        console.log(data);
        
        this.subjects = data
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
        teacherId:this.val.teacher_Id,
        standardId:"",
        divisionId:"",
        subjectId:""
      }
    }
    this.teacherMappingForm = this.fb.group({
      standardId:[this.selectedTeacher.standardId, Validators.required],
      divisionId: [this.selectedTeacher.divisionId, Validators.required],
      teacherId: [this.selectedTeacher.teacherId, Validators.required],
      subjectId: [this.selectedTeacher.subjectId, Validators.required],
    })
    
  
  }

  changeClient(data){
    console.log("data",data);
    
  }
  
  assignTeacher(){
    let formValue = this.teacherMappingForm.value
    if(this.selectedTeacher!=""){
      formValue = {...formValue, "id":this.val.id} 
    }
    this.comService.executePOSTAPI(APIStandars.mapTeachersAPI, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Teacher mapping has been saved.")
        this.dialog.closeAll()
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
