import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { LabNewCourseModalComponent } from '../lab-new-course-modal/lab-new-course-modal.component';

@Component({
  selector: 'app-cm-lab',
  templateUrl: './cm-lab.component.html',
  styleUrls: ['./cm-lab.component.css']
})
export class CmLabComponent implements OnInit {

  courseList:any
  userType:any
  constructor(private matdialog:MatDialog, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.userType  = localStorage.getItem("userType")
    this.listLesson()
  }

  listLesson(){
    this.comService.executePOSTAPI(APIStandars.listLesson,{}).subscribe(
      (data)=>{
        console.log(data);
        this.courseList = data
      }
    )
  }

  newCourse(){
    var dialogRef = this.matdialog.open(LabNewCourseModalComponent)
    dialogRef.afterClosed().subscribe(
      (data)=>{
       this. listLesson()
      }
    )
  }

}
