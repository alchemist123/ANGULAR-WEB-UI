import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-create-simple-activity',
  templateUrl: './create-simple-activity.component.html',
  styleUrls: ['./create-simple-activity.component.css']
})
export class CreateSimpleActivityComponent implements OnInit {

  activityForm: any;
  steps:any = []
  steps_:any = []
  stepsForCount: any = []
  activityDescription = ""
  activityMaterials = ""
  activityObjective = ""
  activityDescription_ = ""
  activityMaterials_ = ""
  activityObjective_ = ""
  activityTitle = ""
  parentLessonId = ""
  type = ""
  contentId = ""
  refId: any;
  constructor(private formBuilder: FormBuilder, private comService: CommunicationService, private notifications: NotificationsService, private activatedRouter: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.activityForm = this.formBuilder.group([
      
    ])
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.parentLessonId = data["id"]
        this.type = data["type"]
        this.refId =  localStorage.getItem("refId")        
        this.contentId = data["componentId"]
        console.log(this.parentLessonId,this.contentId);
        
        if(this.contentId!=undefined){
          this.retriveExisitngData()
        }
      }
    )
    
  }


  retriveExisitngData(){
      this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
        (data)=>{
            this.activityTitle = data[0].lesson[0].lessonName
            var jsonData = JSON.parse(data[0].contentData)
            this.activityDescription_ = jsonData["description"]
            this.activityObjective_ = jsonData["objective"]
            console.log("Activity description", this.activityDescription)
            var activitySteps = jsonData["steps"]
            console.log("stepss", activitySteps)
            if(activitySteps.length>0){
              this.steps = []
              this.steps_ = []
            }
            activitySteps.forEach((step)=>{this.addNewStep(step)})
            this.activityMaterials_ = jsonData["materials"]
        },
        (err)=>{
          this.notifications.showDanger("Failed", "Failed to fetch data. Please try again")
        }
      )
  }

  setActivityDescription($event){
    this.activityDescription = $event
  }

  setActivityMaterials($event){
this.activityMaterials = $event
  }
  addNewStep(data=""){
    this.steps.push(data)
    this.steps_.push(data)
    this.stepsForCount.push("")
    console.log(this.steps)
  }
  updateStep($event, i){
      console.log("updatign step")
      this.steps[i] = $event
  }
  deleteStep(i){
    this.steps.splice(i, 1)
    this.stepsForCount.splice(i,1)
  }
  saveActivity(){

    var jsonDataTOSave = {objective:this.activityObjective, description: this.activityDescription, materials: this.activityMaterials, steps: this.steps}
    if(this.contentId==undefined){
    this.comService.executePOSTAPI(APIStandars.addSupportLessonAPI,{lessonName: this.activityTitle,parentLessonId:this.parentLessonId,refId:this.refId,type:this.type,contentType:"9", media_type:"1", contentData: JSON.stringify(jsonDataTOSave)}).subscribe(
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
      this.comService.executePOSTAPI(APIStandars.addContentForTeachersAPI,{contentId:this.contentId, lessonName: this.activityTitle,parentLessonId:this.parentLessonId,type:this.type,contentType:"9", media_type:"1", contentData: JSON.stringify(jsonDataTOSave)}).subscribe(
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
  setActivityObjective($event){
      this.activityObjective = $event
     
  }

  getCurrentActivity(){

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
