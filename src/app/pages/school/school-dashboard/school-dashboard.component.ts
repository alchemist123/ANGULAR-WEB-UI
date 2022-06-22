import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import  timeGreetings  from "time-greetings";
@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css']
})
export class SchoolDashboardComponent implements OnInit {

  counts: any = {};
  greetingMsg: any;
  schoolInfo: Object;
  constructor(private comService:CommunicationService, private authService:AuthService) { }

  ngOnInit(): void {
    const date = new Date();
    this.greetingMsg = (timeGreetings.timeGreetings(date));
    this.getTotals()
    this.getUserDetails()
  }

  getTotals() {
      this.comService.executePOSTAPI(APIStandars.totalCounts,{}).subscribe((data:any)=>{
        data.forEach((ele)=>{
              this.counts = Object.assign(this.counts,...data);
        })
      })
  }

  getUserDetails(){
    this.comService.executePOSTAPI(APIStandars.getUserDetails,{userType:this.authService.activeUser.userType}).subscribe((data)=>{
      this.schoolInfo=data;
      console.log(this.schoolInfo);
      
    })
  }

}
