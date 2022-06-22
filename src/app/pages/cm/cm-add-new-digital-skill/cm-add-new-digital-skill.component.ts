import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-cm-add-new-digital-skill',
  templateUrl: './cm-add-new-digital-skill.component.html',
  styleUrls: ['./cm-add-new-digital-skill.component.css']
})
export class CmAddNewDigitalSkillComponent implements OnInit {

  digitalSkillForm:any;
  digtialSkills = []
  lessonId: string;
  constructor(
    private router: Router,
    private fb:FormBuilder,  private comService: CommunicationService, private notifications: NotificationsService, private activatedRouter: ActivatedRoute) {

   }

  ngOnInit(): void {
      this.digitalSkillForm =this.fb.group({
        "lessonName": ['', Validators.required],
        "type":['', Validators.required],
        "lessonDescription": ['', Validators.required]
      });

      this.activatedRouter.params.subscribe((data)=>{
        this.lessonId = data["skillId"]
        if(this.lessonId!=undefined) {
          this.getSkillDetails(this.lessonId)
        }
      })

  }

  saveDigitalSkill(){
    if(this.lessonId==undefined){
    this.comService.executePOSTAPI(APIStandars.addDigitalSkillsAPI,this.digitalSkillForm.value).subscribe((data)=>{
        this.notifications.showSuccess("Success","Digital skill added successfully")
        this.router.navigate(["/cm/skill-content-list/"+data["lessonId"]])

    },(err)=>{
      this.notifications.showDanger("Failed", "Failed to save digital skill")
    })
  }else{
    this.comService.executePOSTAPI(APIStandars.addDigitalSkillsAPI,{lessonId:this.lessonId,...this.digitalSkillForm.value}).subscribe((data)=>{
      this.notifications.showSuccess("Success","Digital skill updated successfully")
      this.router.navigate(["/cm/skill-list/"])
  },(err)=>{
    this.notifications.showDanger("Failed", "Failed to save digital skill")
  })
  }
  }

  getSkillDetails(lessonId){
      this.comService.executePOSTAPI(APIStandars.getDigitalSkillDetails,{lessonId}).subscribe((data)=>{
          this.digitalSkillForm.setValue({
            lessonName:data["lessonName"],
            type:data["type"],
            lessonDescription:data["lessonDescription"]
         });
      },(err)=>{
        console.log("error")
      })
  }
  
  
}
