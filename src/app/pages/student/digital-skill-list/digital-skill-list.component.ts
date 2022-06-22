import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-digital-skill-list',
  templateUrl: './digital-skill-list.component.html',
  styleUrls: ['./digital-skill-list.component.css']
})
export class DigitalSkillListComponent implements OnInit {

  type: any;
  skills:any = []
  activeUser:any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private comService: CommunicationService,
    private notify: NotificationsService, private authService: AuthService
  ) {

   }

  ngOnInit(): void {
    this.activeUser = this.authService.activeUser.userType
    this.activatedRouter.params.subscribe((params)=>{
      this.type = params.type;
      this.getSkillList(this.activeUser)
    })
  }

  getSkillList(activeUser){
      let url:string;
      url = activeUser == 'student'? APIStandars.listDigitalSkillsForStudentAPI : APIStandars.listDigitalSkillsForTeacherAPI
      this.comService.executePOSTAPI(url,{type:this.type}).subscribe((data)=>{
          this.skills = data
      })
  }

}
