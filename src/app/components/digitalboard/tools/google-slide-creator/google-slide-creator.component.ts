import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import LessonStandards from "src/app/LessonStandards"
import { Location } from '@angular/common'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-google-slide-creator',
  templateUrl: './google-slide-creator.component.html',
  styleUrls: ['./google-slide-creator.component.css']
})
export class GoogleSlideCreatorComponent implements OnInit {

  slideForm: any;
  contentType = "1"
  mediaType = '0'
  lessonId = ""
  type:any;
  contentId: any = "";
  url = ""
  forText = ""
  lessonName = ""
  lessonNumber: any;
  lessonTypes = LessonStandards
  refId: any;

  constructor(public sanitizer: DomSanitizer, private location: Location, private formBuilder: FormBuilder, private notifications: NotificationsService, private comService: CommunicationService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
      this.lessonId = data["id"]
      this.type = data["type"]
      this.contentId = data["componentId"]
      this.refId = localStorage.getItem("refId")
      this.getContent();
      this.getLessonInfo()
    })
    
    this.slideForm = this.formBuilder.group({
      'lessonName': [this.lessonName, Validators.required],
      'lessonNumber':[this.lessonNumber, Validators.required],
      'slideLink': [this.url, Validators.required]
    })
  }

  addGoogleSlide(){
    if(this.contentId==undefined){
      this.comService.executePOSTAPI(APIStandars.addSupportLessonAPI,{parentLessonId:this.lessonId,refId:this.refId,lessonName:this.slideForm.value.lessonName,lessonNumber:this.slideForm.value.lessonNumber,type:this.type,contentType:this.contentType, media_type:this.mediaType, contentData: this.slideForm.value.slideLink}).subscribe(
        (data)=>{
          this.notifications.showSuccess("Success", "Google slide link saved sucessfully.")
          this.router.navigate(["/teacher/sublevels/"+this.lessonId])
          //this.activatedRouter.
        },(err)=>{
          this.notifications.showDanger("Failed", "Failed save google slide link. Please try again.")
        }
      )
    }else{
      this.comService.executePOSTAPI(APIStandars.addContentForTeachersAPI,{ contentId:this.contentId,parentLessonId: this.lessonId,refId:this.refId,lessonName:this.slideForm.value.lessonName,type:this.type,contentType:this.contentType, media_type:this.mediaType, contentData: this.slideForm.value.slideLink}).subscribe(
        (data)=>{
          this.notifications.showSuccess("Success", "Google slide link saved sucessfully.")
          this.router.navigate(["/teacher/sublevels/"+this.lessonId])
          //this.activatedRouter.
        },(err)=>{
          this.notifications.showDanger("Failed", "Failed save google slide link. Please try again.")
        }
      )
    }
  }
  getContent(){
    this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
      (data:any)=>{
         this.url =  (data[0].contentData.replace("/pub","/embed"))
         this.lessonName =  (data[0].lesson[0].lessonName)
         this.slideForm.controls['slideLink'].setValue(this.url)
         this.slideForm.controls['lessonName'].setValue(this.lessonName)
      },
      (err)=>{
  
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
      this.notifications.showSuccess("Success","Google slide has been deleted successfully.")
      this.location.back();
    },(err)=>{
      this.notifications.showDanger("Failed","Failed to delete content")
    }
  )
}
get safeUrl(){
  return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
}



}
