import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-teacher-lab-evaluation-student-selection',
  templateUrl: './teacher-lab-evaluation-student-selection.component.html',
  styleUrls: ['./teacher-lab-evaluation-student-selection.component.css']
})
export class TeacherLabEvaluationStudentSelectionComponent implements OnInit {
  batchId: any;
  courseIdId: any;
  courseId: any;
  dataSource: any;
  displayedColumns: string[] = ['No','Name','completed challenges', 'pending challenges' ,'total challenges', 'status']
  status: any;
  studentId: any;
  studentName: any;
  taskName: any;
  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.courseId = data["batchId"]
        this.batchId = data["id"]
        localStorage.setItem("studentId",this.courseId)
        this.taskName=localStorage.getItem("taskName")
        console.log(this.batchId,this.courseId, );
        
      }
    )
    this.liststudentSubmissionsReport()
  }

  student(element){
    this.studentId = element["studentId"]
    this.studentName = element["name"]
    
    localStorage.setItem("Studentname", this.studentName)
    console.log("data",this.studentName);
    
  }

  liststudentSubmissionsReport(){
    this.comService.executePOSTAPI(APIStandars.liststudentSubmissionsReport,{batchId: this.batchId, courseId:this.courseId}).subscribe(
      (data)=>{
        console.log(data);
        this.dataSource = data
        this.status = data[0]["status"]
        console.log( this.status);
        
      }
    )
  }

}
