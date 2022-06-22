import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import LessonStandards from 'src/app/LessonStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-adobe-spark',
  templateUrl: './adobe-spark.component.html',
  styleUrls: ['./adobe-spark.component.css']
})
export class AdobeSparkComponent implements OnInit {
  slideForm: any;
  contentType = "0"
  mediaType = '0'
  lessonId = ""
  type:any;
  contentId: any = "";
  url = ""
  forText = ""
  lessonName = ""
  lessonNumber: any;
  lessonTypes = LessonStandards
  
  constructor(public sanitizer: DomSanitizer, private location: Location, private formBuilder: FormBuilder, private notifications: NotificationsService, private comService: CommunicationService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
      this.lessonId = data["id"]
      this.type = data["type"]
      this.contentId = data["componentId"]
      this.getContent();
      this.getLessonInfo()
    })
    
    this.slideForm = this.formBuilder.group({
      'lessonName': [this.lessonName, Validators.required],
      'lessonNumber': [this.lessonNumber, Validators.required],
      'slideLink': [this.url, Validators.required]
    })
  }

  addGoogleSlide(){
    if(this.contentId==undefined){
      this.comService.executePOSTAPI(APIStandars.addSupportLessonAPI,{parentLessonId:this.lessonId,lessonName:this.slideForm.value.lessonName,lessonNumber:this.slideForm.value.lessonNumber,type:this.type,contentType:this.contentType, media_type:this.mediaType, contentData: this.slideForm.value.slideLink}).subscribe(
        (data)=>{
          this.notifications.showSuccess("Success", "Adobe Spark link saved sucessfully.")
          this.router.navigate(["/teacher/sublevels/"+this.lessonId])
          //this.activatedRouter.
        },(err)=>{
          this.notifications.showDanger("Failed", "Failed save Adobe Spark link. Please try again.")
        }
      )
    }else{
      this.comService.executePOSTAPI(APIStandars.addContentForTeachersAPI,{ contentId:this.contentId,parentLessonId: this.lessonId,lessonName:this.slideForm.value.lessonName,type:this.type,contentType:this.contentType, media_type:this.mediaType, contentData: this.slideForm.value.slideLink}).subscribe(
        (data)=>{
          this.notifications.showSuccess("Success", "Adobe Spark link saved sucessfully.")
          this.router.navigate(["/teacher/sublevels/"+this.lessonId])
          //this.activatedRouter.
        },(err)=>{
          this.notifications.showDanger("Failed", "Failed save Adobe Spark link. Please try again.")
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
      this.notifications.showSuccess("Success","Adobe Spark content has been deleted successfully.")
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
