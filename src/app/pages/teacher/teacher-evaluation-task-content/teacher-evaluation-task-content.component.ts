import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { TeacherEvaluationChallengeTaskFeedbackModalComponent } from '../teacher-evaluation-challenge-task-feedback-modal/teacher-evaluation-challenge-task-feedback-modal.component';
import { TeacherEvaluationChallengeTaskRejectModalComponent } from '../teacher-evaluation-challenge-task-reject-modal/teacher-evaluation-challenge-task-reject-modal.component';
import { TeacherLabViewFileModalComponent } from '../teacher-lab-view-file-modal/teacher-lab-view-file-modal.component';
import { TeacherLabViewSourceCodeModalComponent } from '../teacher-lab-view-source-code-modal/teacher-lab-view-source-code-modal.component';

@Component({
  selector: 'app-teacher-evaluation-task-content',
  templateUrl: './teacher-evaluation-task-content.component.html',
  styleUrls: ['./teacher-evaluation-task-content.component.css']
})
export class TeacherEvaluationTaskContentComponent implements OnInit {

  @Input() student:any
  taskId: any;
  studentId: any;
  id: any;
  task: any;
  taskIdd: any;
  content: any;
  StudentName: any;
  status: any;
  taskName: any;
  contentType: any;
  codeData: any;

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute, private dialog:MatDialog,private notify: NotificationsService) {
   }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.taskId = data["id"]
        this.studentId = data["studentId"]
        console.log(this.taskId, this.studentId);
        
      }
    )
      this.taskName=localStorage.getItem("taskName")
      this.liststudSubmissions()
  }

  taskData(data){
    this.taskIdd = data._id
    console.log(this.taskIdd);
    this.taskFeedBack()
    
  }

  taskData2(data){
    this.taskIdd = data._id
    console.log(this.taskIdd);
    this.reviewLabTaskReject()
  }

  liststudSubmissions(){
    this.comService.executePOSTAPI(APIStandars.liststudSubmissions,{taskId:this.taskId,studentId:this.studentId}).subscribe(
      (data)=>{
        console.log(data);
        this.task = data
        this.content = data[0]["contentData"]
        this.contentType = data[0]["contentType"]
        this.codeData = data[0]["codeData"]
        this.status = data[0]["status"]
        console.log(this.status);
        
        this.StudentName = localStorage.getItem("Studentname")
      }
    )
  }

  reviewLabTaskReject(){
    var dialogRef = this.dialog.open(TeacherEvaluationChallengeTaskRejectModalComponent,{
      data:{id:this.taskIdd}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
      this.liststudSubmissions()
      
      }
    )
  }

  taskFeedBack(){

    var dialogRef = this.dialog.open(TeacherEvaluationChallengeTaskFeedbackModalComponent,{
      data:{id:this.taskIdd}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
      this.liststudSubmissions()
      
      }
    )
  }

  openFile(){
    var dialogRef = this.dialog.open(TeacherLabViewFileModalComponent, {
      data:{content:this.content,
        contentType:this.contentType}
    })
  }

  openSourceCode(){
    var dialogRef = this.dialog.open(TeacherLabViewSourceCodeModalComponent, {
      data:{code:this.codeData}
    })
  }
}
