import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { QuestionCardComponent } from 'src/app/components/lessons/lesson-preparation/question-card/question-card.component';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import LessonStandards from "src/app/LessonStandards"
import { Location } from '@angular/common'
import JSSoup from 'jssoup'; 
import compress from 'compress-base64';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.css']
})
export class QAndAComponent implements OnInit {
  questions: String = "";
  numberOfQuestions:number = 1;
  lessonId: any;
  questionsToPublish:any = [];
  type: string;
  contentId: any = "";
  forText = ""
  lessonName: "";

  @ViewChildren('cmp') child:any;
  questionsArray:any = [];
  refId: any;
  answer: any;

  constructor(private location:Location, private router: Router, private activatedRouter: ActivatedRoute, private notify: NotificationsService, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.child = new QueryList<QuestionCardComponent>();
    this.activatedRouter.params.subscribe(params =>{
      this.lessonId = params["id"]
      this.type = params["type"]
      this.refId = localStorage.getItem("refId")
      this.contentId = params["componentId"]
      console.log(this.contentId);
      this.getContent();
      this.getLessonInfo()
    })
  }

  addNewQuestion(q:any={}){
    this.questionsArray.push(q);
  }
  removeQuestion(index:number){
    this.questionsArray.splice(index, 1);
  }
  saveQuestions(){
    this.questionsToPublish = []
    this.child.toArray().forEach((ele:any, idx:any)=>{
      let options:string[] = [];
      ele.questionForm.controls.answerChoices.controls.forEach((answer:any)=>{
        options.push(answer.value);
      })
      let questionToPush = {
        questionId: idx,
        question: ele.questionForm.controls.question.value,
        questionType: ele.questionForm.controls.questionType.value,
        answerOptions: options,
        answer: ele.questionForm.controls.questionAnswer.value
      }
      this.questionsToPublish.push(questionToPush)
    })
    console.log(this.questionsToPublish);
    
    if(this.contentId==undefined){
    this.comService.executePOSTAPI(APIStandars.addSupportLessonAPI,{lessonName: this.lessonName,refId:this.refId,parentLessonId:this.lessonId,type:this.type,contentType:"7", media_type:"1", contentData: JSON.stringify(this.questionsToPublish)}).subscribe(
      (response) => {
        this.notify.showSuccess("Success", "Data saved successfully")
        this.router.navigate(["/teacher/sublevels/"+this.lessonId])
      },
      (err) => {
        this.notify.showDanger("Error","Failed to save data. Please try again.")
      }
      )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.addContentForTeachersAPI,{lessonName:this.lessonName,parentLessonId: this.lessonId,contentId:this.contentId,type:this.type,contentType:"7", media_type:"1", contentData: JSON.stringify(this.questionsToPublish)}).subscribe(
        (response) => {
          this.notify.showSuccess("Success", "Data saved successfully")
          this.router.navigate(["/teacher/sublevels/"+this.lessonId])
        },
        (err) => {
          this.notify.showDanger("Error","Failed to save data. Please try again.")
        }
        )
    }
  }
  getContent(){
    this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
      (data:any)=>{
        try{
        let contentData = JSON.parse(data[0].contentData)
        this.lessonName = data[0].lesson[0].lessonName
        this.answer = contentData.answer
        contentData.forEach(async(ele)=>{
          console.log("elemnets is", ele)
              //var newNaser = await this.getNewData(ele.answer)
              //var newQuation = await this.getNewData(ele.question)
          this.addNewQuestion({question:ele.question, questionType: ele.questionType, answer:ele.answer, answerOptions: ele.answerOptions})
        })
      }
      catch(ex){
        if(this.questionsArray.length ==0){
          //this.addNewQuestion()
        }
      }
      },
      (err)=>{
  
      },
      ()=>{
        if(this.questionsArray.length ==0){
          //this.addNewQuestion()
        }
      }
    )
  }

  getLessonInfo(){
    this.comService.executePOSTAPI(APIStandars.getLessonForTeachers,{parentLessonId:this.lessonId}).subscribe(
      (data:any)=>{
        this.forText = LessonStandards[this.type] + " for the "+ LessonStandards[data.type] + " " + data.lessonName;
      }
    )
}
deleteContent(){
  this.comService.executePOSTAPI(APIStandars.deleteLessonContentTeacherAPI,{contentId:this.contentId}).subscribe(
    (data:any)=>{
      this.notify.showSuccess("Success","Questionnaire has been deleted successfully.")
      this.location.back();
    },(err)=>{
      this.notify.showDanger("Failed","Failed to delete content")
    }
  )
}

async getNewData(htmlString){
  if (htmlString==null){
      return htmlString
  }
          var originalString = htmlString
          var soup = new JSSoup(htmlString);
          var images = soup.findAll('img');
          var newimgs = []
          var i = 0;
          for(i=0;i<images.length;i++){
                var newImg = await this.resizeImage(images[i].attrs.src,500,500)
                
                originalString = originalString.replaceAll(images[i].attrs.src, newImg.toString())
                 
          }
          return originalString
}

resizeImage(base64Str, maxWidth = 400, maxHeight = 350) {
  return new Promise((resolve) => {
    let img = new Image()
    img.src = base64Str
    img.onload = () => {
      let canvas = document.createElement('canvas')
      const MAX_WIDTH = maxWidth
      const MAX_HEIGHT = maxHeight
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)
      resolve(canvas.toDataURL('image/jpeg', .5))
    }
  })
}


}
