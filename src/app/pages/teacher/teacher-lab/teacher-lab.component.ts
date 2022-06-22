import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-teacher-lab',
  templateUrl: './teacher-lab.component.html',
  styleUrls: ['./teacher-lab.component.css']
})
export class TeacherLabComponent implements OnInit {
  courseList: any;
  batchId: any;
  labMentor: any;
  userType: any;

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.batchId = data["id"]
      }
    )
    localStorage.setItem("addModule","false")
    this.userType = localStorage.getItem("userType")
    this.listBatch()
    this.checkLabMentor()
  }

  listBatch(){
    if(this.userType=='teacher'){
      this.comService.executePOSTAPI(APIStandars.listBatchAPI,{}).subscribe(
        (data)=>{
          console.log(data);
          this.courseList = data
        }
      )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.listBatchStudentAPI,{}).subscribe(
        (data)=>{
          console.log(data);
          this.courseList = data
        }
      )
    }
  
  }

  checkLabMentor(){
    this.comService.executePOSTAPI(APIStandars.ifLabMentor,{}).subscribe(
      (data)=>{
        console.log(data);
        this.labMentor = data["status"]
        console.log(this.labMentor);
        
      }
    )
  }


}
