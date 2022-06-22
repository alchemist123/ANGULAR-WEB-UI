import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeSelectComponent } from 'ng2-date-picker';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import LessonStandards from "src/app/LessonStandards"
import { Location } from '@angular/common'

declare var $: any;

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent implements OnInit {

  textEditorForm: any;
  lessonId: any;
  type: any;
  contentId: any = "";
  forText = ""
  lessonName = ""
  textData: any;
  contentData: any = "";
  lessonTypes = LessonStandards
  refId: any;


  constructor(private location: Location, private router: Router, private fb: FormBuilder, private comService: CommunicationService, private notifications: NotificationsService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.lessonId = data["id"]
        this.type = data["type"]
        this.contentId = data["componentId"]
        console.log("content id is", this.contentId)
        this.refId = localStorage.getItem("refId")
        this.getLessonInfo()
        this.getContent();
      }
    )

    this.textEditorForm = this.fb.group({
      'text':['',Validators.required],
      'lessonName': [''],
      'lessonNumber' : ['']
    })
  

}
addTextContent(){
   if(this.contentId==undefined){
  this.comService.executePOSTAPI(APIStandars.addSupportLessonAPI,{lessonName:this.textEditorForm.value.lessonName,refId:this.refId, lessonNumber:this.textEditorForm.value.lessonNumber ,parentLessonId: this.lessonId, type:this.type ,contentType:"3",media_type:"1", contentData: this.textData}).subscribe(
    (data)=>{
        this.notifications.showSuccess("Success","Data added successfully")
        this.router.navigate(["/teacher/sublevels/"+this.lessonId])
    },
    (err)=>{
      this.notifications.showDanger ("Failed","Failed to save data")
    }
  )
}
else{
  this.comService.executePOSTAPI(APIStandars.addContentForTeachersAPI,{lessonName:this.textEditorForm.value.lessonName,refId:this.refId ,parentLessonId: this.lessonId, contentId: this.contentId, type:this.type ,contentType:"3",media_type:"1", contentData: this.textData}).subscribe(
    (data)=>{
        this.notifications.showSuccess("Success","Data updated successfully")
        this.router.navigate(["/teacher/sublevels/"+this.lessonId])
    },
    (err)=>{
      this.notifications.showDanger ("Failed","Failed to save data")
    }
  )
}
}
getContent(){
  this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
    (data:any)=>{
      console.log(data[0].contentData)
      this.lessonName = data[0].lesson[0].lessonName
      this.textEditorForm.controls['lessonName'].setValue(this.lessonName)
      this.contentData = data[0].contentData
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
      this.notifications.showSuccess("Success","Text editor content has been deleted successfully.")
      this.location.back();
    },(err)=>{
      this.notifications.showDanger("Failed","Failed to delete content")
    }
  )
}
updateText($event)
{
  this.textData = $event;
}

}
