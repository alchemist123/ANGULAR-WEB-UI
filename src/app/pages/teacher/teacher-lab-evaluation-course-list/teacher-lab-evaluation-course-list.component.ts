import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-teacher-lab-evaluation-course-list',
  templateUrl: './teacher-lab-evaluation-course-list.component.html',
  styleUrls: ['./teacher-lab-evaluation-course-list.component.css']
})
export class TeacherLabEvaluationCourseListComponent implements OnInit {
  courseList: any;
  batchId: any;
 

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.batchId = data["batchId"]
        
        console.log(this.batchId);
        
      }
    )
    this.listLesson()
  }

  listLesson(){
      this.comService.executePOSTAPI(APIStandars.listBatchModules,{batchId:this.batchId}).subscribe(
        (data)=>{
          console.log(data);
          this.courseList = data
        }
      )
    }

    getName(name){
      localStorage.setItem("taskName",name)
    }
}
