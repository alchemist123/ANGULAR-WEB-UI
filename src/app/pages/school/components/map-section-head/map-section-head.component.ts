import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-map-section-head',
  templateUrl: './map-section-head.component.html',
  styleUrls: ['./map-section-head.component.css']
})
export class MapSectionHeadComponent implements OnInit {

  standards:any = []
  teachers:any = []
  teacherId: any = "-1";
  standardId: any = "-1";


  constructor(private comService: CommunicationService, private notificationService: NotificationsService ) { }

  ngOnInit(): void {
    this.getTeachers()
  }

  getTeachers(){
      this.comService.executePOSTAPI(APIStandars.listTeacherAPI,{}).subscribe((data)=>{this.teachers = data})
  }

  addMapping(){
      this.comService.executePOSTAPI(APIStandars.assignSectionHead, {type: this.standardId, sectionHeadId: this.teacherId}).subscribe((data)=>{
            this.notificationService.showSuccess("Success","Section head has been added successfully.")
      }, (err)=>{this.notificationService.showDanger("Error","Failde to add section head")})
      
  }

}
