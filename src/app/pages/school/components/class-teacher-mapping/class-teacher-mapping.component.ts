import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WindowScrollController } from '@fullcalendar/angular';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-class-teacher-mapping',
  templateUrl: './class-teacher-mapping.component.html',
  styleUrls: ['./class-teacher-mapping.component.css']
})
export class ClassTeacherMappingComponent implements OnInit {



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
  id: any;
  teacherFName: any;
  teacherLName: any;
  standard: any;
  division: any;
  fromDialog:string
  constructor(private fb: FormBuilder, private notify: NotificationsService, private comService: CommunicationService, private dialog : MatDialog, public dialogRef: MatDialogRef<ClassTeacherMappingComponent>,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val._id);
      this.teacherFName = val.teacherFName
      this.teacherLName = val.teacherLName
      this.standard = val.standard
      this.division = val.division
   }

   ngOnChanges(){
     this.initForms()
     this.getExistingData()
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
        standardId:"",
        divisionId:"",
        subjectId:""
      }
    }
    this.teacherMappingForm = this.fb.group({
      standardId:[this.selectedTeacher.standardId, Validators.required],
      divisionId: [this.selectedTeacher.divisionId, Validators.required],
      teacherId: [this.selectedTeacher.teacherId, Validators.required],
    })
    
  
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
       console.log(data);
       
       this.teachersList = data
     },
     (err)=>{
       this.notify.showDanger("Failed", "Failed to fetch data from server.")
     }
   )


  }


  assignTeacher(){
    if(this.val._id){
      let formValue = this.teacherMappingForm.value
    if(this.selectedTeacher!=""){
      formValue = {...formValue, "id":this.val._id}
    }
    this.comService.executePOSTAPI(APIStandars.school.assignClassTeacher, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Teacher mapping has been saved.")
        this.dialog.closeAll()
        this.formSubmitted.emit("form submitted")
        this.dialogRef.close();
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
    }
    else{
      let formValue = this.teacherMappingForm.value
      if(this.selectedTeacher!=""){
        formValue = {...formValue}
      }
      this.comService.executePOSTAPI(APIStandars.school.assignClassTeacher, formValue).subscribe(
        (data)=>{
          this.notify.showSuccess("Success","Teacher mapping has been saved.")
          this.dialog.closeAll()
          this.formSubmitted.emit("form submitted")
          this.dialogRef.close();
        },
        (err)=>{
          this.notify.showDanger("Failed", "Failed to complete operation.")
        }
      )
    }

   
    
  }

  closeDialog() {
    // this.initForms()
    // setTimeout(()=>{
    //   this.dialogRef.close();
    // },500)
//     this.teacherFName = ""
//  this.teacherLName = ""
// this.standard = ""
// this.division = ""
// this.val._id= ""
    //this.teacherMappingForm.reset()
  }

}
