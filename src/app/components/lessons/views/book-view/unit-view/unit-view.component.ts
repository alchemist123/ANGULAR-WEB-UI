import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import LessonStandards from 'src/app/LessonStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { MatDialog } from '@angular/material/dialog';
import { HodApprovalModalComponent } from 'src/app/pages/teacher/HOD/hod-approval-modal/hod-approval-modal.component';
import { ScientificActivityComponent } from '../../../learning/scientific-activity/scientific-activity.component';

declare var $: any;
@Component({
  selector: 'app-unit-view',
  templateUrl: './unit-view.component.html',
  styleUrls: ['./unit-view.component.css']
})
export class UnitViewComponent implements OnInit {

  @Input() lesson: any;
  @Output() onAnswerSubmit: EventEmitter<string> = new EventEmitter();
  @Output() onLessonSelected:EventEmitter<string> = new EventEmitter<string>();

  buttonStatus:boolean=false

  visible:boolean=false
  unitId:any
  subUnits = []
  learningObjectives = []
  understandingQns = []
  preAssesmentQns = []
  learningOutcomes = []
  topics = []
  activities = []
  postAssesmentQns = []
  microUnits = []
  nanoUnits = []
  lessonTypes = LessonStandards
  lessonIdd:any
  lessonCompletion : any = []
  userTypes: any;
  usersTypes: any;
  isHOD: any;
  completedDate: any;
  Mode:any
  datas: any;
  reviewStatus: boolean=false
  hodCompletedDate: any;
  concept: any;
  topicsData: any;
  btnStatus: any;
  sons: any;
  conceptActivity: any;
  conceptActivityParse: void;
  constructor(private communicationsService:CommunicationService, private authService:AuthService, private router: Router, private activatedRouter: ActivatedRoute, private dialog:MatDialog) { 
    this.usersTypes=localStorage.getItem("userType")
  }

  ngOnInit(): void {
    
    this.reviewStatus = !this.reviewStatus
    this.Mode=localStorage.getItem("HODMODE")
    this.getLessonCompletion()
    this.buttonStatus=this.lesson.compilationStatus
    this.visible=this.lesson.visibleStatus
    console.log("data",this.lesson._id);
    console.log( this.usersTypes);
    
    
    //this.getUnitContents()
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.lessonIdd=data["id"]
        console.log("llid",this.lessonIdd);
      }
    )
    this.ifReviewed()  
    this.listTeacherConcepts()
    this.listPreviewTopics()
    
  }
  ngOnChanges(){
    this.ifReviewed()  
    this.getUnitContents()
    this.getLessonCompletion()
    this.checkIfHOD()
    this.listTeacherConcepts()
    this.listPreviewTopics()
    this.buttonStatus=this.lesson.compilationStatus
    this.visible=this.lesson.visibleStatus
    this.reviewStatus = !this.reviewStatus
  }

  getUnitContents(){
    this.resetData();
    if(this.authService.activeUser.userType =="student"){
    this.communicationsService.executePOSTAPI(APIStandars.getSupportContentsStudentAPI,{parentLessonId:this.lesson._id}).subscribe(
      (data:any)=>{
        data.forEach((element)=>{
            this.addElements(element)
        })
        console.log("Learning objective", this.learningObjectives)
      }
    );
    }else  if(this.authService.activeUser.userType =="teacher"){
      console.log(this.lesson._id);
      
      this.communicationsService.executePOSTAPI(APIStandars.getSupportContentsTeacherAPI,{parentLessonId:this.lesson._id}).subscribe(
        (data:any)=>{
          console.log(data);
          
          data.forEach((element)=>{
              this.addElements(element)
          })
          console.log("Learning objective", this.learningObjectives)
        }
      );
    }
    else{
      this.communicationsService.executePOSTAPI(APIStandars.principal.getSupportedLesson,{parentLessonId:this.lesson._id}).subscribe(
        (data:any)=>{
          data.forEach((element)=>{
              this.addElements(element)
          })
          console.log("Learning objective", this.learningObjectives)
        }
      );
    }

}

listTeacherConcepts(){
  if(this.authService.activeUser.userType =="teacher"){
  this.communicationsService.executePOSTAPI(APIStandars.listPreviewConcepts,{lessonId:this.lesson._id}).subscribe(
    (data:any)=>{
      console.log(data);
      this.concept = data
      this.sons = data["sons"]
      console.log("data",this.sons);
      
    }
  ) }
  else if(this.authService.activeUser.userType =="student"){
    this.communicationsService.executePOSTAPI(APIStandars.listConcepts,{lessonId:this.lesson._id}).subscribe(
      (data)=>{
        this.concept = data
        console.log(data);
        
      }
    )
  }
  else{
    this.communicationsService.executePOSTAPI(APIStandars.principal.listPreviewConceptsPrincipal,{lessonId:this.lesson._id}).subscribe(
      (data)=>{
        this.concept = data
        console.log(data);
        
      }
    )
  }
}

selectActivity(activity){
  this.conceptActivity = activity
  this.conceptActivityParse = JSON.parse(activity.contents[0].contentData) 
  console.log("concept", this.conceptActivityParse);
  console.log("concept", this.conceptActivity);
  
}

listPreviewTopics(){
  if(this.authService.activeUser.userType =="teacher"){
    this.communicationsService.executePOSTAPI(APIStandars.listPreviewTopics,{lessonId:this.lesson._id}).subscribe(
      (data)=>{
        console.log(data);
        this.topicsData = data
      }
    )
  }
  else if(this.authService.activeUser.userType =="student"){
    this.communicationsService.executePOSTAPI(APIStandars.listPreviewTopicsStudent,{lessonId:this.lesson._id}).subscribe(
      (data)=>{
        console.log(data);
        this.topicsData = data
      }
    )
  }
  else{
    this.communicationsService.executePOSTAPI(APIStandars.principal.listPreviewTopicsPrincipal,{lessonId:this.lesson._id}).subscribe(
      (data)=>{
        console.log(data);
        this.topicsData = data
      }
    )
  }

  
}

onTopicSelection(id){
  var lessonDetails: any = {_id:id}
  this.onLessonSelected.emit(lessonDetails);
  console.log(lessonDetails);
  
}

addElements(element){
  switch(element.type){
    case "5":
      this.learningObjectives.push(element)
      break;
    case "6":
      this.learningOutcomes.push(element)
      break
    case "1":
      this.microUnits.push(element)
      break;
    case "2":
      this.nanoUnits.push(element)
      break;
    case "14":
      this.activities.push(element)
      break
    case "15":
      this.activities.push(element)
      break
    case "16": 
      this.activities.push(element)
      break
    case "17":
      this.activities.push(element)
      break;
    case "18":
        this.understandingQns.push(element)
        break;
    case "19":
      this.preAssesmentQns.push(element)
      break
    case "20":
      this.postAssesmentQns.push(element)
      break
    default:
      this.topics.push(element)
      break;                
  }
  console.log("data",this.postAssesmentQns);
  
}

loadNextUnit(){
  
}

answerSubmitted($event){
  console.log("Answer submit in unit view")
this.onAnswerSubmit.emit("")
}

get answerInputVisible(){
 
  if(this.usersTypes=='student'){
    return true
  }
  else{
    return false
  }
  
}

resetData(){
  this.subUnits = []
  this.learningObjectives = []
  this.understandingQns = []
  this.preAssesmentQns = []
  this.learningOutcomes = []
  this.topics = []
  this.activities = []
  this.postAssesmentQns = []
  this.microUnits = []
  this.nanoUnits = []
}

loadnNanoUnit(unitId){
  console.log({unitId})
  
  var url = ""; 
  
  if (this.authService.activeUser.userType == "student")
        url = "/student/bookView/"+unitId 
  else if((this.authService.activeUser.userType == "teacher"))
        url = "/teacher/bookView/"+unitId
  else
  url = "/principal/bookView/"+unitId
  
  this.router.navigate([url])
}


lessonComplition(){
  let standardId=localStorage.getItem("standardId")
  let divisionId=localStorage.getItem("divisionId")
  let _id=localStorage.getItem("unitId")
  console.log(standardId);
  console.log(divisionId);
  console.log("id",_id);
  
  this.buttonStatus = ! this.buttonStatus
  this.visible =! this.visible
  this.communicationsService.executePOSTAPI(APIStandars.lessonComplition,{lessonId:this.lesson._id, id:_id, standardId:standardId, divisionId:divisionId, chapterId:this.lessonIdd}).subscribe(
    (data)=>{
      //this.buttonStatus=this.lesson.compilationStatus
      this.lessonCompletion=data
      this.completedDate = new Date().toDateString()
      
    }
  )
 //this.getLessonCompletion()
}

getLessonCompletion(){
  
  let standardId=localStorage.getItem("standardId")
  let divisionId=localStorage.getItem("divisionId")
  this.communicationsService.executePOSTAPI(APIStandars.getLessonCompletion,{lessonId:this.lesson._id,standardId, divisionId }).subscribe(
    (data:any)=>{
      console.log(data);
      
      this.userTypes=localStorage.getItem("userType")
      if(data["date"])
      this.completedDate = new Date(data["date"]).toDateString()
      
      console.log(this.userTypes);
      this.buttonStatus=data.status
      this.unitId=localStorage.setItem("unitId", data._id)
      console.log(this.buttonStatus);  
    }
  )
}

checkIfHOD(){
  this.communicationsService.executePOSTAPI(APIStandars.HOD.checkIfHOD,{}).subscribe(
    (data)=>{
      this.isHOD=data["status"]
      console.log(data);
      
    }
  )

}

activityOpen(){
  var dialogRef = this.dialog.open(ScientificActivityComponent)
}

hodReview(){
  const dialogRef=this.dialog.open(HodApprovalModalComponent,{
    data:{_id:this.lesson._id,
          chapterId:this.lessonIdd}
    
  })

  dialogRef.afterClosed().subscribe(
    (data)=>{
      this.ifReviewed()
    }
  ) 
}

ifReviewed(){

  let standardId=localStorage.getItem("standardId")
  let divisionId=localStorage.getItem("divisionId")
  this.communicationsService.executePOSTAPI(APIStandars.HOD.ifReviewed,{lessonId:this.lesson._id, standardId:standardId, divisionId:divisionId}).subscribe(
    (data:any)=>{
      console.log(data);
      this.btnStatus = data["status"]
      this.reviewStatus=data.data["reviewStatus"]
      console.log("status",this.reviewStatus,this.btnStatus);


      if(data.data["reviewDate"])
      this.hodCompletedDate = new Date(data.data["reviewDate"]).toDateString()
      console.log(this.hodCompletedDate);
      this.btnStatus = data["status"]
      this.reviewStatus=data.data["reviewStatus"]
      console.log(this.reviewStatus,this.btnStatus);
      
    }
  )
}


}


