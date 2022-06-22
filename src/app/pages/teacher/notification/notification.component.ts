import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import messages from 'src/app/notificationConstants'
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notification:any
  completedDate: any;
  dateTime=[];
  notificationTitles = messages;

  constructor(private comService: CommunicationService, private authService: AuthService) {
    
   }

  ngOnInit(): void {
    this.getNotification()
  }

   getNotificationTitle(type){
    return this.notificationTitles[type]
  }

  getNotification(){
    this.comService.executePOSTAPI(APIStandars.notificationEvents,{}).subscribe(
      (data:any)=>{
        console.log(data);
             
        if(data["date_time"])
        this.completedDate=new Date(data["date_time"]).toDateString()
        
        this.notification  = data
      }
    )
  }
  getComment(data){
    console.log(data);
    if(data.extra=='N/A'){
      data.extra={}
     
    }
    else{
      return JSON.parse(data.extra).comment
    }
  }

  fromNow(date){
   return moment(date).fromNow();
  }

}
