import { Component, Input, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-experiential-activity',
  templateUrl: './experiential-activity.component.html',
  styleUrls: ['./experiential-activity.component.css']
})
export class ExperientialActivityComponent implements OnInit {
  @Input()  contentId: string
  lessonId: any;
  isActivityAdded: any;
  studentContentId: any;
  activityContents = []
  activityData: any;


  
  observations = {
    stage_1: [],
    stage_2: [],
    stage_3: [],
    stage_4: [],
  }

  observations_ = {
    stage_1: [],
    stage_2: [],
    stage_3: [],
    stage_4: [],
  }
  activeUser: any;

  constructor(private comService: CommunicationService,
              private notify: NotificationsService,private authService:AuthService) { 
                this.activeUser =this.authService.activeUser
              }

  ngOnInit(): void {


    this.getContent()
  }

  updateStep(stage,idx, $event){
      this.observations[stage][idx] = $event;
  }

  addStudentActivities(submit=false){
    var contentData = {observations: this.observations, submissionStatus: submit}
   if(!this.isActivityAdded){
    this.comService.executePOSTAPI(APIStandars.addContentForStudent,{contentData: JSON.stringify(contentData) ,extra:"",lessonId: this.lessonId, contentType:"10", media_type:"1" }).subscribe(
      (data)=>{
        this.notify.showSuccess("Success", "Data saved successfully.")
      },(err)=>{
        this.notify.showDanger("Error","Error saving data.")
      }
    )
   }else{
    this.comService.executePOSTAPI(APIStandars.addContentForStudent,{contentData: JSON.stringify(contentData) ,extra:"",contentId: this.studentContentId, contentType:"10", media_type:"1"}).subscribe(
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
          var studentData = JSON.parse(data[0].contentData)
          this.studentContentId = data[0]._id
          this.observations = studentData["observations"]
          this.observations_ = studentData["observations"]
      }else{

      }
    })
  }

  getContent(){
    if(this.activeUser.userType=="student"){
    this.comService.executePOSTAPI(APIStandars.listLessonContentForStudentAPI,{id: this.contentId}).subscribe(
      (data:any)=>{
        console.log({data})
        this.activityContents = data[0]

        this.lessonId = data[0].lessonId
        this.activityData = JSON.parse(data[0].contentData)
        this.activityData.stages.stage_1.forEach((ele)=>{
          this.observations["stage_1"].push("");
          this.observations_["stage_1"].push("");
        })
        this.activityData.stages.stage_2.forEach((ele)=>{
          this.observations["stage_2"].push("");
          this.observations_["stage_2"].push("");
        })
        this.activityData.stages.stage_3.forEach((ele)=>{
          this.observations["stage_3"].push("");
          this.observations_["stage_3"].push("");
        })
        this.activityData.stages.stage_4.forEach((ele)=>{
          this.observations["stage_4"].push("");
          this.observations_["stage_4"].push("");
        })

        this.getStudentContent()
      },
      (err)=>{
  
      }
    )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
        (data:any)=>{
          console.log({data})
          this.activityContents = data[0]
  
          this.lessonId = data[0].lessonId
          this.activityData = JSON.parse(data[0].contentData)
          this.activityData.stages.stage_1.forEach((ele)=>{
            this.observations["stage_1"].push("");
            this.observations_["stage_1"].push("");
          })
          this.activityData.stages.stage_2.forEach((ele)=>{
            this.observations["stage_2"].push("");
            this.observations_["stage_2"].push("");
          })
          this.activityData.stages.stage_3.forEach((ele)=>{
            this.observations["stage_3"].push("");
            this.observations_["stage_3"].push("");
          })
          this.activityData.stages.stage_4.forEach((ele)=>{
            this.observations["stage_4"].push("");
            this.observations_["stage_4"].push("");
          })
  
          this.getStudentContent()
        },
        (err)=>{
    
        }
      )
    }
  }

  submitTheActivity(){

  }

}
