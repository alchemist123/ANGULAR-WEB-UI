import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import messages from 'src/app/notificationConstants'
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-student-notification',
  templateUrl: './student-notification.component.html',
  styleUrls: ['./student-notification.component.css']
})
export class StudentNotificationComponent implements OnInit {

  notification:any
  completedDate: any;
  dateTime=[];
  notificationTitles = messages;
  msg: any;

  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {
    this.getNotification()
  }

  getNotificationTitle(type){
    return this.notificationTitles[type]
  }

  getNotification(){
    this.comService.executePOSTAPI(APIStandars.getNotification,{}).subscribe(
      (data:any)=>{
        if(data.length == 0){
          this.msg = "You have no notification to display."
        }
        console.log(data);
             
        if(data["date_time"])
        this.completedDate=new Date(data["date_time"]).toDateString()
        
        this.notification  = data
      }
    )
  }
  getComment(data){
    return JSON.parse(data.extra).comment
  }

  fromNow(date){
   return moment(date).fromNow();
  }

}
