import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeScale } from 'chart.js';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;

@Component({
  selector: 'app-qand-aview',
  templateUrl: './qand-aview.component.html',
  styleUrls: ['./qand-aview.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QandAViewComponent implements OnInit {

  @Input() contentId;
  @Output() onAnswerSubmit: EventEmitter<string> = new EventEmitter();
  @Output() questionNumberUpdate: EventEmitter<object> = new EventEmitter();
  @Input() view = "list"
  @Input() answerInputVisible = true
  @Input() chapterData;
  
  questions: any = []
  answers =  {}
  lessonId = ""
  studentAnswers = []
  extraInfo = {}
  studentContentForSync = {}
  editStatus = {}
  studentContentId: any;
  questionIndex = 0;
  question: any;
  userTypes:any;
  isLoading = false;
  chapterId: any;
 
  constructor(private comService: CommunicationService,private activatedRouter: ActivatedRoute, private notify: NotificationsService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log("id",this.chapterData);
    
    this.activatedRouter.params.subscribe(params => {
      this.chapterId =localStorage.getItem("chapterContentId")
      console.log("id",this.chapterId);
      
    })

  this.getContent();
  }


  
  // getContent(){
  //   var url = this.authService.activeUser.userType == "student" ? APIStandars.listLessonContentForStudentAPI : APIStandars.listContentTeacherAPI
  //   this.comService.executePOSTAPI(url,{id: this.contentId}).subscribe(
  //   (data:any)=>{
  //       if(data.length>0){
  //       this.questions = JSON.parse(data[0].contentData)
  //       for (let i=0; i<this.questions.length; i++){
  //         this.answers[i] = ""
  //       }
  //       this.questionNumberUpdate.emit({total: this.questions.length,current:this.questionIndex});
  //       this.lessonId = data[0].lessonId
  //       //initialize student answers to empty
  //       this.questions.forEach((data)=>{
  //           this.studentContentForSync[data.questionId] = ""
  //           this.extraInfo[data.questionId] = {"status": -1}
  //           this.editStatus[data.questionId] = 0
    
  //       })
  //       console.log({"Questions of answer": this.questions})
  //       console.log({"extra info of answer": this.extraInfo})
  //       this.question = this.questions[0]
  //       if(this.authService.activeUser.userType=="student"){
  //         console.log("Getting student contents")
  //         this.getStudentAnswers()
  //       }
  //     }
  //     },
  //     (err)=>{
  
  //     }
  //   )
  // }




getContent(){
    //var url = this.authService.activeUser.userType == "student" ? APIStandars.listLessonContentForStudentAPI : APIStandars.listContentTeacherAPI
    if(this.authService.activeUser.userType == "student"){
      this.comService.executePOSTAPI(APIStandars.listLessonContentForStudentAPI,{id: this.contentId}).subscribe(
        (data:any)=>{
            if(data.length>0){
            this.questions = JSON.parse(data[0].contentData)
            for (let i=0; i<this.questions.length; i++){
              this.answers[i] = ""
            }
            this.questionNumberUpdate.emit({total: this.questions.length,current:this.questionIndex});
            this.lessonId = data[0].lessonId
            //initialize student answers to empty
            this.questions.forEach((data)=>{
                this.studentContentForSync[data.questionId] = ""
                this.extraInfo[data.questionId] = {"status": -1}
                this.editStatus[data.questionId] = 0
        
            })
            console.log({"Questions of answer": this.questions})
            console.log({"extra info of answer": this.extraInfo})
            this.question = this.questions[0]
            if(this.authService.activeUser.userType=="student"){
              console.log("Getting student contents")
              this.getStudentAnswers()
            }
          }
          },
          (err)=>{
      
          }
        )
    }
    else if(this.authService.activeUser.userType == "teacher"){
      this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
        (data:any)=>{
            if(data.length>0){
            this.questions = JSON.parse(data[0].contentData)
            for (let i=0; i<this.questions.length; i++){
              this.answers[i] = ""
            }
            this.questionNumberUpdate.emit({total: this.questions.length,current:this.questionIndex});
            this.lessonId = data[0].lessonId
            //initialize student answers to empty
            this.questions.forEach((data)=>{
                this.studentContentForSync[data.questionId] = ""
                this.extraInfo[data.questionId] = {"status": -1}
                this.editStatus[data.questionId] = 0
        
            })
            console.log({"Questions of answer": this.questions})
            console.log({"extra info of answer": this.extraInfo})
            this.question = this.questions[0]
            if(this.authService.activeUser.userType=="student"){
              console.log("Getting student contents")
              this.getStudentAnswers()
            }
          }
          },
          (err)=>{
      
          }
        )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.principal.listContentPrincipalAPI,{id: this.contentId}).subscribe(
        (data:any)=>{
            if(data.length>0){
            this.questions = JSON.parse(data[0].contentData)
            for (let i=0; i<this.questions.length; i++){
              this.answers[i] = ""
            }
            this.questionNumberUpdate.emit({total: this.questions.length,current:this.questionIndex});
            this.lessonId = data[0].lessonId
            //initialize student answers to empty
            this.questions.forEach((data)=>{
                this.studentContentForSync[data.questionId] = ""
                this.extraInfo[data.questionId] = {"status": -1}
                this.editStatus[data.questionId] = 0
        
            })
            console.log({"Questions of answer": this.questions})
            console.log({"extra info of answer": this.extraInfo})
            this.question = this.questions[0]
            if(this.authService.activeUser.userType=="student"){
              console.log("Getting student contents")
              this.getStudentAnswers()
            }
          }
          },
          (err)=>{
      
          }
        )
    }
    
  }








  saveSingleAnswer(idx){
    this.extraInfo[idx] = {status: 0}
    this.submitAnswers()
  }



  submitAnswers(){
    if(this.checkAnswerIsEmpty(this.questionIndex)){
    if(this.studentAnswers.length==0){
      this.isLoading = true
      this.comService.executePOSTAPI(APIStandars.addContentForStudent,{lessonId: this.lessonId,chapterId:this.chapterId, contentType: "7", contentData: JSON.stringify(this.answers), media_type: "1", extra: JSON.stringify(this.extraInfo)}).subscribe(
        (data)=>{
          this.questionNumberUpdate.emit({total: 0,current:this.questionIndex});
            this.onAnswerSubmit.emit("Success")
            this.notify.showSuccess("Success","Your answer saved successfully.")
            this.getContent()
        }, (err)=>{

        },
        ()=>{
          this.isLoading = false;
        }
      )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.addContentForStudent,{contentId:this.studentContentId,lessonId: this.lessonId,chapterId:this.chapterId, contentType: "7", contentData: JSON.stringify(this.answers), media_type: "1", extra: JSON.stringify(this.extraInfo)}).subscribe(
        (data)=>{
            this.onAnswerSubmit.emit("Success")
            this.notify.showSuccess("Success","Your answer updated successfully.")
            this.getContent()
        }, (err)=>{

        }
      )
    }
  } else{
    this.notify.showDanger("","You cannot move forward without answering the question.")
  }
     }


    

  updateText($event, i){
    this.answers[i] = $event
    if(this.extraInfo[i].status!=-1){
    if(this.extraInfo.hasOwnProperty(i)){
      this.extraInfo[i] = {status: 0}
    }
    else{
      this.extraInfo[i] = {status: 1}
    }
  }
  }

  updateAnswer(answerOption, index){
    this.answers[index] = answerOption
    if(this.extraInfo.hasOwnProperty(index)){
      //this.extraInfo[index] = {status: 0}
    }
    else{
      this.extraInfo[index] = {status: 1}
    }
  }

  getStudentAnswers(){
    this.comService.executePOSTAPI(APIStandars.getStudentContentsForStudentAPI,{lessonId:this.lessonId}).subscribe(
      (data:any)=>{
        for(var i=0; i<data.length; i++){
          this.studentContentId = data[i]._id
          data[i].contentData = JSON.parse(data[i].contentData)
          for (let [key, value] of Object.entries(data[i].contentData)) {
            this.studentContentForSync[key] = value
            this.answers[key] = value

          }
          try{
            
            var ei = JSON.parse(data[i].extra)

            this.extraInfo = {...this.extraInfo, ...JSON.parse(data[i].extra)}


          }catch(e){
            console.log("Exra info not found")
          }
        }
        this.studentAnswers = data
        console.log("Waiting at student answers", this.studentAnswers)
      }
    )
  }
  correctAndSave(questionId){
    this.editStatus[questionId] = 0
    this.extraInfo[questionId] = {status: 1}
    this.submitAnswers()
  }
  editAnswer(questionId){
    this.editStatus[questionId] = 1
  }
  markAsCorrect(questionId){
    this.editStatus[questionId] = 2
    this.extraInfo[questionId] = {status:2}
    this.submitAnswers()
  }
  updateAnswerAndMoveNextQuestion(){
  if(this.checkAnswerIsEmpty(this.questionIndex)){
      this.questionIndex = this.questionIndex + 1;
      this.questionNumberUpdate.emit({total: 0,current:this.questionIndex});
      this.question = this.questions[this.questionIndex]
      console.log("Showing question ", this.questionIndex, " of ", this.questions.length)
  }
  else{
    this.notify.showDanger("","You cannot move forward without answering the question.")
  }

  }

  checkAnswerIsEmpty(idx){
    if(this.answers.hasOwnProperty(idx)){
      return true;
    }
    else{
      return false;
    }

  }

}
