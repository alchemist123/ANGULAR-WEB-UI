import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-hod-mapping-modal',
  templateUrl: './hod-mapping-modal.component.html',
  styleUrls: ['./hod-mapping-modal.component.css']
})
export class HodMappingModalComponent implements OnInit {

  @Input() selectedHod:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  teachersList: any = []
  subjects: any = []
  hohMappingForm:any
  sectionId: any;
  section: any;
  SubjectName:any
  teacherName:any
  sectionName:any
  query:any
  query1:any
  
  constructor(private comService:CommunicationService, private notify: NotificationsService, private fb:FormBuilder, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      //console.log(val.teacherName,val.subjectName, val.sectionName);
      // this.teacherName = this.val.teacherName
      // this.SubjectName = this.val.subjectName
      // this.sectionName = this.val.sectionName
     }

  ngOnChange(){
    this.initForms()

  }

  ngOnInit(): void {
    this.listTeacher()
    this.initForms()
    this.listSections()
  }

  initForms()
  {
    if(this.selectedHod==""){
      this.selectedHod = {
        teacherDetails: {},
        teacherId:"",
        subjectId:"",
        sectionId:""
      }
    }
    this.hohMappingForm = this.fb.group({
      teacherId: [this.selectedHod.teacherId, Validators.required],
      subjectId: [this.selectedHod.subjectId, Validators.required],
      sectionId: [this.selectedHod.sectionId, Validators.required]
    })
    
  
  }

  listTeacher(){
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
        this.subjects = data
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to fetch data from server.")
      }
    )
  }

  listSections(){
    this.comService.executePOSTAPI(APIStandars.listSections,{}).subscribe(
      (data)=>{
        console.log(data);
        this.sectionId = data[0]["_id"]
        this.section = data
        console.log(this.sectionId);
        
      }
    )
  }

  assignHod(){
    let teacherId = this.hohMappingForm.value.teacherId
    let subjectId = this.hohMappingForm.value.subjectId
    let sectionId = this.hohMappingForm.value.sectionId
    let _id = localStorage.getItem("hodId")
    let formValue = this.hohMappingForm.value
    if(this.selectedHod!=""){
      formValue = {...formValue, "id":_id}
    }
  
    this.comService.executePOSTAPI(APIStandars.assignHoD,formValue).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","HOD mapping has been saved.")
        this.formSubmitted.emit("form submitted")
        this.dialog.closeAll()
        
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }
}
