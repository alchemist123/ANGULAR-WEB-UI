import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-cm-digital-skill-list',
  templateUrl: './cm-digital-skill-list.component.html',
  styleUrls: ['./cm-digital-skill-list.component.css']
})
export class CmDigitalSkillListComponent implements OnInit {
  digtialSkills = []
  constructor(private comService:CommunicationService, private notify: NotificationsService) { }
  ngOnInit(): void {
    this.listDigitalSkills();
  }
  listDigitalSkills(){
    this.comService.executePOSTAPI(APIStandars.listDigitalSkillAPI,{}).subscribe((data:any)=>{
      this.digtialSkills = data
    })
  }

}
