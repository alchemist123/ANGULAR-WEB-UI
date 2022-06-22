import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-assesment-questions',
  templateUrl: './assesment-questions.component.html',
  styleUrls: ['./assesment-questions.component.css']
})
export class AssesmentQuestionsComponent implements OnInit {

  lessonId: any;
  type: any;
  length = 0;
  totalNumberOfQuestions = 0
  currentIdx = 1
  questions = []
  previousStatus: any;
  constructor(private activatedRouter: ActivatedRoute, private comService:CommunicationService, private router: Router) { }

  ngOnInit(): void {
        this.previousStatus = localStorage.getItem("previousData")
        this.activatedRouter.params.subscribe(params => {
        this.lessonId = params["lessonId"]
        localStorage.setItem("chapterContentId",this.lessonId)
        console.log(this.lessonId);
        
        this.type = params["type"]
        if(this.type=="19")
        this.getQuestions()
        if(this.type=="20"){
          this.getPostAssesmentQns()
        }

      })
  }
  getQuestions(){
    if(this.previousStatus == 'true'){
    this.comService.executePOSTAPI(APIStandars.checkPreAssessmentForStudent,{lessonId: this.lessonId, lessonType: this.type}).subscribe(
      (data:any) => { 
        this.questions = data
        this.length = this.questions.length;
        if(this.questions.length == 0){
          this.router.navigate(["/student/bookView/"+this.lessonId])
        }
      }
    )
    }
  }
  getPostAssesmentQns(){
    this.comService.executePOSTAPI(APIStandars.checkPostAssessmentForStudent,{lessonId: this.lessonId, lessonType: this.type}).subscribe(
      (data:any) => { 
        this.questions = data
        this.length = this.questions.length;
        if(this.questions.length == 0){
          this.router.navigate(["/student/bookView/"+this.lessonId])
        }
      }
    )
  }
  updateQuestion($event, i){
    this.questions.splice(i,1)
    if(this.questions.length == 0){
      this.router.navigate(["/student/bookView/"+this.lessonId])
    }
  }
  submitAssessment(){
      this.router.navigate(["/student/bookView/"+this.lessonId])
  }
  questionNumberUpdate($event){
    if($event.total==0)
    this.currentIdx = this.currentIdx + 1
    this.totalNumberOfQuestions=this.totalNumberOfQuestions+$event.total
  }

}
