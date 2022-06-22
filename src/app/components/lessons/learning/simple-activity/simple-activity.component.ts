import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-simple-activity',
  templateUrl: './simple-activity.component.html',
  styleUrls: ['./simple-activity.component.css']
})
export class SimpleActivityComponent implements OnInit {

  @Input() contentId;
  @Input() contents;
  @Input() contentsParseData;
  @Input() dataTarget=""
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

  constructor(private comService: CommunicationService,private activatedRouter: ActivatedRoute, private notify: NotificationsService, private authService: AuthService) {
    this.activeUser =this.authService.activeUser
   }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.chapterId = params["id"]
      console.log("id",this.chapterId);
      
    })
    this.getContent();
    
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
        
        this.activityData = JSON.parse(data[0].contentData)
        this.activityData.steps.forEach((ele)=>{
          this.observations.push("")
          this.observations_.push("")
        })
        this.getStudentContent()
      },
      (err)=>{
  
      }
    )}
    else if(this.activeUser.userType=="teacher"){
      this.comService.executePOSTAPI(APIStandars.listLessonContentForTeacherAPI,{id: this.contentId}).subscribe(
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
  updateStep($event, i){
    this.observations[i] = $event
  }
  updateConclusion($event){
    this.conclusion = $event
  }

  addStudentActivities(submit=false){
    var contentData = {observations:this.observations,conclusion:this.conclusion, submissionStatus: submit}
   if(!this.isActivityAdded){
    this.comService.executePOSTAPI(APIStandars.addContentForStudent,{contentData: JSON.stringify(contentData) ,extra:"",lessonId: this.lessonId, contentType:"9", media_type:"1", chapterId:this.chapterId}).subscribe(
      (data)=>{
        this.notify.showSuccess("Success", "Data saved successfully.")
      },(err)=>{
        this.notify.showDanger("Error","Error saving data.")
      }
    )
   }else{
    this.comService.executePOSTAPI(APIStandars.addContentForStudent,{contentData: JSON.stringify(contentData) ,extra:"",contentId: this.studentContentId, contentType:"9", media_type:"1", chapterId:this.chapterId}).subscribe(
      (data)=>{
        this.notify.showSuccess("Success", "Data saved successfully.")
      },(err)=>{
        this.notify.showDanger("Error","Error saving data.")
      }
    )
   }
  
  }

  getStudentContent(){
    this.comService.executePOSTAPI(APIStandars.getStudentContentsForStudentAPI,{lessonId:this.lessonId}).subscribe((data:any)=>{
      if(data.length>0){
          this.isActivityAdded = true;
          this.status = data[0]["status"]
          console.log("status", this.status);
          console.log(data);
          this.lessonActivityId = data[0]["lessonId"]
          console.log(this.lessonActivityId);
          
          var studentData = JSON.parse(data[0].contentData)
          this.studentContentId = data[0]._id
          studentData.observations.forEach((obs,idx)=>{
            this.observations[idx] = obs
            this.observations_[idx] = obs
          })
          this.conclusion = studentData.conclusion
          this.submissionStatus = studentData["submissionStatus"]
      }else{

      }
    })
  }

  addContent(){

  }
}
