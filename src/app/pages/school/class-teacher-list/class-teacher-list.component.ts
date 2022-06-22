import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { ClassTeacherMappingComponent } from '../components/class-teacher-mapping/class-teacher-mapping.component';
declare var $:any;
@Component({
  selector: 'app-class-teacher-list',
  templateUrl: './class-teacher-list.component.html',
  styleUrls: ['./class-teacher-list.component.css']
})
export class ClassTeacherListComponent implements OnInit {

  
  mappingList: any = []
  currentMapping: any = ""
  teacherFName: any;
  teacherLName: any;
  standard: any;
  division: any;
  query:any
  constructor(private comService:CommunicationService, private notify: NotificationsService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.refreshList()

  }

  selectTeacher(maping){
  console.log("selected subject", maping)
  this.currentMapping = maping._id
  this.teacherFName = maping.teacher[0]?.teacherFirstName
  this.teacherLName = maping.teacher[0]?.teacherLastName
  this.standard = maping.standard[0]?.standards
  this.division = maping.division[0]?.division
  console.log("data",this.currentMapping);
  
  this.addMapping()
}

  refreshList(){
    console.log("Event recieved")
  this.comService.executePOSTAPI(APIStandars.school.classTeacherList,{}).subscribe(
    (data)=>{
      console.log(data);
      
      this.mappingList = data
      $('#teacherMapingModal').modal('hide')
    },
    (err)=>{
      console.log(err)
      this.notify.showDanger("Error","Failed to fetch subject details.")
    }
  )
}

addMapping(){
  // this.teacherFName = ""
  // this.teacherLName = ""
  // this.currentMapping = ""
 const dialogConfig = new MatDialogConfig();
 var dialogRef = this.dialog.open(ClassTeacherMappingComponent, {
   data:{_id:this.currentMapping,
        teacherFName:this.teacherFName,
        teacherLName:this.teacherLName,
        standard:this.standard,
        division:this.division}
 })
 dialogRef.afterClosed().subscribe(
  (data)=>{
    console.log(data);
    dialogRef.afterClosed()
    this.refreshList()
    this.teacherFName = ""
    this.teacherLName = ""
    this.currentMapping = ""
    this.standard = ""
    this.division = ""
  }
)
}

}
