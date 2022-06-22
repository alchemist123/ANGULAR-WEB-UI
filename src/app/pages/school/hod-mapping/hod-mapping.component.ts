import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { HodMappingModalComponent } from 'src/app/components/modals/onboarding/hod-mapping-modal/hod-mapping-modal.component';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-hod-mapping',
  templateUrl: './hod-mapping.component.html',
  styleUrls: ['./hod-mapping.component.css']
})
export class HodMappingComponent implements OnInit {

  mappingList: any = []
  currentTeacher:any = ""
  teacherName: any;
  subjectName: any;
  sectionName: any;
  query:any
  constructor(private dialog : MatDialog, private comServices:CommunicationService) {
      
      
     }

  ngOnInit(): void {
    this.listHod()
  }

  selectTeacher(teacher){
    console.log("selected teacher", teacher)
    this.currentTeacher = teacher._id
    this.teacherName = teacher.teacher[0].teacherFirstName
    this.subjectName = teacher.subject[0].subject
    this.sectionName = teacher.section
    localStorage.setItem("hodId", this.currentTeacher)
    console.log(this.teacherName);
    
    var dialogRef = this.dialog.open(HodMappingModalComponent,
      {
        data:{teacherName:this.teacherName,
              subjectName:this.subjectName,
              sectionName:this.sectionName}
      })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listHod()
      }
    )
  }
  

  assignHod(){
  
    var dialogRef = this.dialog.open(HodMappingModalComponent)
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listHod()
      }
    )
    localStorage.removeItem("hodId")
  }

  listHod(){
    this.comServices.executePOSTAPI(APIStandars.listHod,{}).subscribe(
      (data)=>{
        this.mappingList = data
        console.log(data);
        
      }
    )
  }

}
