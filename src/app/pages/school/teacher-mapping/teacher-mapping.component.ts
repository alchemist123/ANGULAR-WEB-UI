import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { TeacherMappingModalComponent } from 'src/app/components/modals/onboarding/teacher-mapping-modal/teacher-mapping-modal.component';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

declare var $: any;
@Component({
  selector: 'app-teacher-mapping',
  templateUrl: './teacher-mapping.component.html',
  styleUrls: ['./teacher-mapping.component.css']
})
export class TeacherMappingComponent implements OnInit {

  
    mappingList: any = []
    currentMapping: any = ""
    standardId: any;
    divisionId: any;
    teacherId: any;
    subjectId: any;
    id: any;
    currenteacher: any="";
    query:any
    teacherFName: any;
    teacherLName: any;
    standard: any;
    division: any;
  subject: any;
  teacher_Id: any;
    constructor(private comService:CommunicationService, private notify: NotificationsService, private dialog : MatDialog) { }

    ngOnChanges(){
      //this.removeTeacher()
      //this.refreshList()
      
    }
  
    ngOnInit(): void {
      this.refreshList()
  
    }
  
    selectSubject(maping){
    console.log("selected subject", maping)
    this.currentMapping = maping
    this.teacherFName = maping.teacher[0]?.teacherFirstName
    this.teacherLName = maping.teacher[0]?.teacherLastName
    this.standard = maping.standard[0]?.standards
    this.division = maping.division[0]?.division
    this.subject = maping.subject[0]?.subject
    this.teacher_Id = maping.teacherId
    this.id = this.currentMapping._id
    console.log(this.teacherFName,
      this.teacherLName ,
      this.standard,
       this.division,this.subject);
    
    this.addMapping()
  }
  
    refreshList(){
      console.log("Event recieved")
    this.comService.executePOSTAPI(APIStandars.school.listAssignTeacher,{}).subscribe(
      (data)=>{
        
        this.mappingList = data
        console.log(this.mappingList);
        
        $('#teacherMapingModal').modal('hide')
      },
      (err)=>{
        console.log(err)
        this.notify.showDanger("Error","Failed to fetch subject details.")
      }
    )
   
  }

  selectTeacher(teacher){
    console.log("Selct",teacher);
        this.standardId = teacher.standardId
        this.divisionId = teacher.divisionId
        this.teacherId  = teacher.teacherId
        this.subjectId  = teacher.subjectId 
        this.id = teacher._id
        console.log( this.id);
        this.removeTeacher()
  }

  removeTeacher(){
    this.comService.executePOSTAPI(APIStandars.switchOffClass,{standardId:this.standardId, divisionId:this.divisionId, teacherId:this.teacherId, subjectId: this.subjectId,id:this.id}).subscribe(
      (data)=>{
        this.refreshList()
        console.log(data);
        this.notify.showSuccess("Sucess","")
      },
      (err)=>{
        this.notify.showDanger("Failed to complete the operation","")
      }
    )
    
  }

  addMapping(){
    var dialogRef = this.dialog.open(TeacherMappingModalComponent, {
      data:{id:this.id,
            teacherFName:this.teacherFName,
            teacherLName:this.teacherLName,
            standard:this.standard,
            division:this.division,
            subject:this.subject,
            teacherId:this.teacher_Id,
            maping:this.currentMapping}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.refreshList()
        this.teacherFName = ""
        this.teacherLName = ""
        this.currentMapping = ""
        this.standard = ""
        this.division = ""
        this.subject = ""
        this.id = ""
        this.teacher_Id = ""
      }
    )
  }
  
  // addMapping(){
  //   this.currentMapping = ""
  //   $('#teacherMapingModal').modal('show')
  
  
  // }
  
  }
  