import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { DigitalSkillMentorMappingComponent } from '../components/digital-skill-mentor-mapping/digital-skill-mentor-mapping.component';
declare var $: any;
@Component({
  selector: 'app-digital-skill-mentors',
  templateUrl: './digital-skill-mentors.component.html',
  styleUrls: ['./digital-skill-mentors.component.css']
})



export class DigitalSkillMentorsComponent implements OnInit {

  mappingList:any  = []
  currentMapping: any = "";
  constructor(private comService: CommunicationService, private notifications: NotificationsService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.listDigitalSkillMapping()
  }
  selectDigitalSkill(teacher){
    this.currentMapping = teacher
    //this.addMapping()
  }
  listDigitalSkillMapping(){
      this.comService.executePOSTAPI(APIStandars.listAssignMentorTeachers,{}).subscribe(data => {this.mappingList = data}, err => {this.notifications.showDanger("Failed","Failed to fetch details")})
  }

  addMapping(){
    var dialogRef = this.dialog.open(DigitalSkillMentorMappingComponent)
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listDigitalSkillMapping()
      }
    )
  }

  // addMapping(){
    
  //   $('#teacherMentorMapingModal').modal('show')
  // }

}
