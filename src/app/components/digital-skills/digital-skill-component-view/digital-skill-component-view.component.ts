import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var Reveal: any;
declare var RevealMarkdown: any; 
declare var RevealHighlight: any;
declare var  RevealNotes:any;
declare var $: any;
@Component({
  selector: 'app-digital-skill-component-view',
  templateUrl: './digital-skill-component-view.component.html',
  styleUrls: ['./digital-skill-component-view.component.css']
})
export class DigitalSkillComponentViewComponent implements OnInit {

  contents:any = [];
  lessonId:string;
  activeUser:any;
  assignmentHistoryData:any = [];

  constructor(
    private comService: CommunicationService, 
    private notifications: NotificationsService,
    private activatedRouter: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.lessonId = params["lessonId"]
      let activeUser = this.authService.activeUser.userType
      this.activeUser = activeUser
      this.getDigitlaSkillContents(activeUser)
    })
  }

  getDigitlaSkillContents(activeUser){
    let url: string;
    if(activeUser =='student')
    { 
        url = APIStandars.listDigitalSkillContentForStudentAPI;
    }
    if(activeUser == 'teacher')
        url = APIStandars.listDigitalSkillContentForTeacherAPI

    this.comService.executePOSTAPI(url ,{lessonId: this.lessonId}).subscribe(
      (data)=>{
        this.contents = data[0]
      }
    )
  }

  addSubmission(id){
      $(`#${id}_modal`).modal("show");
  }
  onSubmit($event){
      this.getDigitlaSkillContents(this.activeUser)
  }
 

}
