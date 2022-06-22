import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { TimeScale } from 'chart.js';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { CalendarModalComponent } from '../calendar-modal/calendar-modal.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  todayEvent: any;
  user: any;
  

  constructor(private dialog : MatDialog, private comService: CommunicationService,) { }

  ngOnInit(): void {
   
    this.getCalendarEvent()
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    
    events: [
      {title: '', date: '', backgroundColor:'yellow'}
    ],
    eventTextColor:'black !important'  ,eventColor:'red', eventBackgroundColor:'red !important'
  };

  handleDateClick() {
    if(this.user=='school' || this.user=='staff'){
      var dialogRef= this.dialog.open(CalendarModalComponent)  
      dialogRef.afterClosed().subscribe(
        (data)=>{
          this.getCalendarEvent()
        }
      ) 
     
      
    }
   
  }

  getCalendarEvent(){
    this.user=localStorage.getItem("userType")
    console.log(this.user);
    let events = []
    let color = []
    if(this.user=='school'){

      this.comService.executePOSTAPI(APIStandars.getEvent,{}).subscribe(
        (data:any)=>{
         
          data.forEach(element => {
            events.push({title: element.event, date: element.startDate, eventTextColor:'#fff',eventColor:'red', eventBackgroundColor:'#fff'})
          });
          this.calendarOptions.events= events
          console.log(data);
          
        }
      )
    }
    if(this.user=='teacher'){
      this.comService.executePOSTAPI(APIStandars.getTeacherEvent,{}).subscribe(
        (data:any)=>{

          data.forEach(element => {
            events.push({title: element.event, date: element.startDate, eventTextColor:'#fff',eventColor:'red', eventBackgroundColor:'#fff'})
          });
          this.calendarOptions.events= events
          console.log(data);
          
        }
      )
    } 
    if(this.user=='student'){
      this.comService.executePOSTAPI(APIStandars.getStudentEvent,{}).subscribe(
        (data:any)=>{
          data.forEach(element => {
            events.push({title: element.event, date: element.startDate, eventTextColor:'#fff',eventColor:'red', eventBackgroundColor:'#fff'})
          });
          this.calendarOptions.events= events
          console.log(data);
          
        }
      )
    }

    if(this.user=='parent'){
      this.comService.executePOSTAPI(APIStandars.getParentEvent,{}).subscribe(
        (data:any)=>{
          data.forEach(element => {
            events.push({title: element.event, date: element.startDate, eventTextColor:'#fff',eventColor:'red', eventBackgroundColor:'#fff'})
          });
          this.calendarOptions.events= events
          console.log(data);
          
        }
      )
    }

    // if(this.user=='staff'){
    //   this.comService.executePOSTAPI(APIStandars.getprincipalEvent,{}).subscribe(
    //     (data)=>{
    //       console.log(data);
          
    //     }
    //   )
    // }
  }
}
