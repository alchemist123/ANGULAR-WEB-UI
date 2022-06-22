import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-teacher-evaluation-student-data',
  templateUrl: './teacher-evaluation-student-data.component.html',
  styleUrls: ['./teacher-evaluation-student-data.component.css']
})
export class TeacherEvaluationStudentDataComponent implements OnInit {
  
  parentLessonId: any;
  challenges: any;
  task: any;
  studentId: any;
  taskId: any;
  studentsId: any;

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute,private notify: NotificationsService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.parentLessonId = data["id"]
        this.studentsId = data["studentId"]
        console.log(this.studentsId );
        
      }
    )
    this.studentId=localStorage.getItem("studentId")
    this.listchallengesandTask()
  }

  taskData(data){
    this.taskId = data._id
    console.log("id",this.taskId);
    
  }

 

  listchallengesandTask(){
    this.comService.executePOSTAPI(APIStandars.listChallengeAndTask,{courseId:this.studentId}).subscribe(
      (data)=>{
        this.challenges = data
       
      }
    )
  }

}
