import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-experiential-learning',
  templateUrl: './experiential-learning.component.html',
  styleUrls: ['./experiential-learning.component.css']
})
export class ExperientialLearningComponent implements OnInit {

  concept: any = ""
  concept_: any;
  activityTitle: any = ""
  stages = {
    "stage_1": [""],
    "stage_2": [""],
    "stage_3": [""],
    "stage_4": [""],
    "stage_5": [""],
  }
  stages_ = {
    "stage_1": [""],
    "stage_2": [""],
    "stage_3": [""],
    "stage_4": [""],
    "stage_5": [""],
  }
  contentId: any;
  parentLessonId: any;
  type:any;
  refId: any;

  constructor(private comService:CommunicationService, 
              private notifications:NotificationsService, 
              private activatedRouter: ActivatedRoute,
              private router: Router,private location: Location) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(
      (data)=>{
        this.parentLessonId = data["id"]
        this.type = data["type"]
        this.contentId = data["componentId"]
        this.refId =  localStorage.getItem("refId")
        if(this.contentId!=undefined){
          this.retriveExisitngData()
        }
      }
    )
  }

  addInstruction(stage){
      this.stages[stage].push("")
      this.stages_[stage].push("")
  }

  updateInstruction(stage, idx, $event){
      this.stages[stage][idx] = $event
  }

  setActivityConcept($event){
    this.concept = $event;
  }

  saveActivity(){
    var jsonDataToSave = {concept:this.concept, stages:this.stages}
    if(this.contentId==undefined){
      this.comService.executePOSTAPI(APIStandars.addSupportLessonAPI,{lessonName: this.activityTitle,parentLessonId:this.parentLessonId,refId:this.refId,type:this.type,contentType:"10", media_type:"1", contentData: JSON.stringify(jsonDataToSave)}).subscribe(
        (data)=>{
          this.notifications.showSuccess("Success","Activity added successfully")
          this.router.navigate(["/teacher/sublevels/"+this.parentLessonId])
        },
        (err)=>{
          this.notifications.showDanger("Failed","Failed to save data. Please try again")
        }
      )
      }
      else{
        this.comService.executePOSTAPI(APIStandars.addContentForTeachersAPI,{contentId:this.contentId, lessonName: this.activityTitle,parentLessonId:this.parentLessonId,type:this.type,contentType:"10", media_type:"1", contentData: JSON.stringify(jsonDataToSave)}).subscribe(
          (data)=>{
            this.notifications.showSuccess("Success","Activity added successfully")
            this.router.navigate(["/teacher/sublevels/"+this.parentLessonId])
          },
          (err)=>{
            this.notifications.showDanger("Failed","Failed to save data. Please try again")
          }
        )
      }

  }

  retriveExisitngData(){
    this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
      (data)=>{
          this.activityTitle = data[0].lesson[0].lessonName
          var jsonData = JSON.parse(data[0].contentData)
          this.concept_ = jsonData["concept"]
          this.stages_ = jsonData["stages"]
         
      },
      (err)=>{
        this.notifications.showDanger("Failed", "Failed to fetch data. Please try again")
      }
    )
  }


  deleteContent(){

    this.notifications.showConfirm("Are you sure you want to delete this activity?", "Delete", "cancel").then((res)=>{
      if(res){
         this.comService.executePOSTAPI(APIStandars.deleteLessonContentTeacherAPI,{contentId:this.contentId}).subscribe(
      (data) =>{
        this.notifications.showSuccess("Success","Lesson has been deleted successfully.")
        this.location.back()
      },(err)=>{
        this.notifications.showDanger("Failed","Deletion of this lesson has been completed successfully.")
      }
      )
      }
      else{

      }
    })

   
  }




}
