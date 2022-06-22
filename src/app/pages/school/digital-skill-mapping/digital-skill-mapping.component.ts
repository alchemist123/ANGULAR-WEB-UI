import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-digital-skill-mapping',
  templateUrl: './digital-skill-mapping.component.html',
  styleUrls: ['./digital-skill-mapping.component.css']
})
export class DigitalSkillMappingComponent implements OnInit {

  mappingList:any  = []
  currentMapping: any = "";
  constructor(private comService: CommunicationService, private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.listDigitalSkillMapping()
  }
  selectDigitalSkill(teacher){
    this.currentMapping = teacher
    $('#teacherMapingModal').modal('show')
  }
  listDigitalSkillMapping(){
      this.comService.executePOSTAPI(APIStandars.listDigitalSkillMentorForSchoolAPI,{}).subscribe(data => {this.mappingList = data}, err => {this.notifications.showDanger("Failed","Failed to fetch details")})
      console.log(this.mappingList);
      
  }
  addMapping(){
    $('#teacherMapingModal').modal('show')
  }


}
