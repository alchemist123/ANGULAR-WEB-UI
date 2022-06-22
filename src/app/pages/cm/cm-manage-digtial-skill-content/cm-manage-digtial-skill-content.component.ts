import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cm-manage-digtial-skill-content',
  templateUrl: './cm-manage-digtial-skill-content.component.html',
  styleUrls: ['./cm-manage-digtial-skill-content.component.css']
})
export class CmManageDigtialSkillContentComponent implements OnInit {

  contentType : any;
  contentForm: any;
  mediaType : any;
  linkContent: any;
  lessonId: any;
  contentId: any;
  textContent: any;
  content: any;
  mediaTypeMapping = {
      2:"1",
      1:"2", 
      0:"0", 
      3:"0",
      4:"0",
      5:"0",
      6:"0",
      7:"0",
      8:"0",
  };

  constructor(private fb: FormBuilder,
              private activatedRouter: ActivatedRoute, private router: Router, 
              private communicationsService:CommunicationService, private notify: NotificationsService, 
              private location:Location
    ) {

     }

  ngOnInit(): void {
   this.activatedRouter.params.subscribe((params: any) => {
     this.lessonId = params.lessonId
     this.contentId = params.contentId
     if(this.contentId!=undefined){
       this.getContentData()
     }
   })

    this.contentForm = this.fb.group({
      contentTitle: ['', Validators.required],
      contentDescription: ['', Validators.required],
      contentType: ['', Validators.required],
      type:['', Validators.required]
    })
  }

  contentTypeChange($event){
    this.mediaType = this.mediaTypeMapping[this.contentForm.value.contentType]
    this.contentType = this.contentForm.value.contentType
    
  }
  updateText($event){
      this.textContent = $event;
  }


  save(){
    var data;
    if(this.mediaType==0)
       data = this.linkContent
    if(this.mediaType==1)
      data = this.textContent

    
    if(this.contentId==undefined){
        this.communicationsService.executePOSTAPI(APIStandars.updateDigitalSkillContent,
          {...this.contentForm.value, contentData: data, media_type: this.mediaType, lessonId: this.lessonId}
          ).subscribe((data) =>{
            this.notify.showSuccess("success","Data saved successfully")
            this.location.back();


          },(err) =>{
            this.notify.showDanger("error","Failed to save data. Please try again")
          })
    }else{
      this.communicationsService.executePOSTAPI(APIStandars.updateDigitalSkillContent,
        {...this.contentForm.value,contentId: this.contentId  ,contentData: data, media_type: this.mediaType, lessonId: this.lessonId}
        ).subscribe((data) =>{
          this.notify.showSuccess("success","Data saved successfully")
          this.location.back();

        },(err) =>{
          this.notify.showDanger("error","Failed to save data. Please try again")
        })

    }
    
  }

  getContentData(){
    this.communicationsService.executePOSTAPI(APIStandars.getDigitalSkillContent,{contentId:this.contentId}).subscribe((data) =>{
        this.content = data;
        this.contentForm.controls['contentTitle'].setValue(this.content['contentTitle'])
        this.contentForm.controls['contentDescription'].setValue(this.content['contentDescription'])
        this.contentForm.controls['contentType'].setValue(this.content['contentType'])
        this.contentForm.controls['type'].setValue(this.content['type'])
        this.contentTypeChange("")
        this.linkContent = this.content['contentData']
    })
  }



}
