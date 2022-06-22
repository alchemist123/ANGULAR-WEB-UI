import { Component, OnInit } from '@angular/core';
import { NgxFeedbackService, FeedbackData } from 'ngx-feedback';
import APIStandars from './APIStandards';
import { CommunicationService } from './services/communication/communication.service';
import { NotificationsService } from './services/notifications/notifications.service';
import { App as CapacitorApp } from '@capacitor/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stemclass';
  constructor(private readonly feedbackService: NgxFeedbackService, private comService:CommunicationService,
    private notificationService: NotificationsService
    ){

  }
  ngOnInit() {
    CapacitorApp.addListener('backButton', ({canGoBack}) => {
      //if(!canGoBack){
      //  CapacitorApp.exitApp();
     // } else {
        window.history.back();
      //}
    });

    this.feedbackService.listenForFeedbacks().subscribe((data: FeedbackData) => {
      this.comService.executePOSTAPI(APIStandars.guest.sendFeedback,data).subscribe((data)=>{

      },
      (err:any) => {
        this.notificationService.showDanger("Failed","Updating the feedback to the server failed, Please try again.")
      }
      )

  });
  }
}
