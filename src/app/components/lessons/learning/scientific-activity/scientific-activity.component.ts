import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $:any
@Component({
  selector: 'app-scientific-activity',
  templateUrl: './scientific-activity.component.html',
  styleUrls: ['./scientific-activity.component.css']
})
export class ScientificActivityComponent implements OnInit {
  @Input() contentId;
  lessonId: string = "";
  activityContents: any;
  activityData: any;
  observations = []
  observations_ = []
  conclusion = ""
  isActivityAdded = false;
  submissionStatus = false;
  studentContentId = "";
  activeUser: any;
  chapterId: any;
  status: any;
  acitivityStatus: any;
  lessonActivityId: any;
  measurement: any;
  analysis: any;
  interpretation: any;
  observation: any;
  observation_: boolean;
  measurement_: boolean;
  analysis_: any;
  interpretation_: any;
  conclusion_: boolean;

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute,private notify: NotificationsService,private authService:AuthService, public sanitizer: DomSanitizer) {
    this.activeUser =this.authService.activeUser
   }

   ngOnChanges(){
    this.getStudentContent()
   }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.chapterId = params["id"]
      console.log("id",this.chapterId);
      
    })
    this.getContent()
    //this.getStudentContent()
    console.log("id",this.contentId);
    
  }

  getContent(){
    if(this.activeUser.userType=="student"){
    this.comService.executePOSTAPI(APIStandars.listLessonContentForStudentAPI,{id: this.contentId}).subscribe(
      (data:any)=>{
        
        console.log({data})
        this.acitivityStatus = data[0].lesson[0].status
        console.log("sta",this.acitivityStatus);
        
        this.activityContents = data[0]
        console.log("acti",this.activityContents);
        
        this.lessonId = data[0].lessonId
        console.log(this.lessonId);
        this.getStudentContent()
        this.activityData = JSON.parse(data[0].contentData)
        console.log( this.activityData);
        
  
       
      },
      (err)=>{
  
      }
    )
    
   }
    else if(this.activeUser.userType=="teacher"){
      this.comService.executePOSTAPI(APIStandars.listLessonContentForTeacherAPI,{id: this.contentId}).subscribe(
        (data:any)=>{

          console.log({data})
          this.activityContents = data[0]
          console.log("acti",this.activityContents);
          
          this.lessonId = data[0].lessonId
          this.activityData = JSON.parse(data[0].contentData)
          this.activityData.step.forEach((ele)=>{
            this.observations.push("")
            this.observations_.push("")
          })
          this.getStudentContent()
        },
        (err)=>{
    
        }
      )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.principal.getContents,{id: this.contentId}).subscribe(
        (data:any)=>{
          console.log({data})
          this.activityContents = data[0]
          console.log("acti",this.activityContents);
          
          this.lessonId = data[0].lessonId
          this.activityData = JSON.parse(data[0].contentData)
          this.activityData.steps.forEach((ele)=>{
            this.observations.push("")
            this.observations_.push("")
          })
          this.getStudentContent()
        },
        (err)=>{
    
        }
      )
    }
  }

  updateObservation($event){
    this.observation = $event
  }
  updateConclusion($event){
    this.conclusion = $event
  }
  updateMeasurement($event){
    this.measurement = $event
  }
  updateAnalysis($event){
    this.analysis = $event
  }
  updateInterpretation($event){
    this.interpretation = $event
  }

  addStudentActivities(submit=false){
    var contentData = {observations:this.observation,measurement:this.measurement,analysis:this.analysis,interpretation:this.interpretation,conclusion:this.conclusion, submissionStatus: submit}
   if(!this.isActivityAdded){
    this.comService.executePOSTAPI(APIStandars.addContentForStudent,{contentData: JSON.stringify(contentData) ,extra:"",lessonId: this.lessonId, contentType:"9", media_type:"1", chapterId:this.chapterId}).subscribe(
      (data)=>{
        this.notify.showSuccess("Success", "Data saved successfully.")
        $('#exampleModals').modal('hide')
        console.log("data");
        
        this.getStudentContent()
      },(err)=>{
        this.notify.showDanger("Error","Error saving data.")
      }
    )
   }else{
    this.comService.executePOSTAPI(APIStandars.addContentForStudent,{contentData: JSON.stringify(contentData) ,extra:"",contentId: this.studentContentId, contentType:"9", media_type:"1", chapterId:this.chapterId}).subscribe(
      (data)=>{
        this.notify.showSuccess("Success", "Data saved successfully.")
        $('#exampleModals').modal('hide')
        this.getStudentContent()
      },(err)=>{
        this.notify.showDanger("Error","Error saving data.")
      }
    )
   }
  
  }
  getStudentContent(){
    this.comService.executePOSTAPI(APIStandars.getStudentContentsForStudentAPI,{lessonId:this.lessonId}).subscribe((data:any)=>{
      if(data.length>0){
        console.log(data);
        var jsonData = JSON.parse(data[0].contentData)
        console.log("json",jsonData);
        this.observation_ = jsonData["observations"]
        this.measurement_ = jsonData["measurement"]
        this.analysis_ = jsonData["analysis"]
        this.interpretation_ = jsonData["interpretation"]
        this.conclusion_ = jsonData["conclusion"]
          this.isActivityAdded = true;
          this.status = data[0]["status"]
          console.log("status", this.status);
          console.log(data);
          this.lessonActivityId = data[0]["lessonId"]
          console.log(this.lessonActivityId);
          
          var studentData = JSON.parse(data[0].contentData)
          this.studentContentId = data[0]._id
          // studentData.observations.forEach((obs,idx)=>{
          //   this.observations[idx] = obs
          //   this.observations_[idx] = obs
          // })
          this.conclusion = studentData.conclusion
          this.submissionStatus = studentData["submissionStatus"]
      }else{

      }
    })
  }
 

}
