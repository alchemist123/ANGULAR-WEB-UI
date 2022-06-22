import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css']
})
export class CalendarModalComponent implements OnInit {

  
  @Input() event:any = ""
  eventForm:any
  teachers=false;
  students=false;
  parents=false;
  principal=false;
  all=false;
  userArray: any = []
  constructor(private fb:FormBuilder, private comService : CommunicationService, private notify: NotificationsService, private dialog:MatDialog, public dialogRef: MatDialogRef<any>) { }

  ngOnChanges(){
    this.initForms()
  }

  ngOnInit(): void {
    this.initForms()
  }

  initForms(){
    if(this.event==""){
      this.event={
        eventName:"",
        eventCnt:"",
        eventToDate:"",
        eventFrmDate:""

      }
    }

    this.eventForm=this.fb.group({
      eventName:[this.event.eventName, Validators.required],
      eventCnt:[this.event.eventCnt, Validators.required],
      eventFrmDate:[this.event.eventFrmDate, Validators.required],
      eventToDate:[this.event.eventToDate, Validators.required],
      
    })
  }

  onUserChange($event,user){
    if(user=='teachers'){
      this.teachers=$event.checked 
    }
    else if(user=='students'){
      this.students=$event.checked
    }
    else if(user=='parents'){
      this.parents=$event.checked
    }
    else if(user=='principal'){
      this.principal=$event.checked
    }
    else if(user=='all'){
      this.all=$event.checked
    }

    console.log($event);
    
    console.log(this.teachers);
    
  }

  addEvent(){
   if(this.teachers==true)
     this.userArray.push(1)
   if(this.students==true)
    this.userArray.push(2)
   if(this.parents==true)
    this.userArray.push(3)  
   if(this.all==true)
    this.userArray.push(4)
   if(this.principal==true)
    this.userArray.push(5) 

    let arrayData=this.userArray.toString()
    let data="["+arrayData+"]"
    
   console.log(this.userArray);
   
    let formValue = this.eventForm.value
    console.log(formValue);
    
    if(this.event!==""){
      formValue = {...formValue}
    }
    this.comService.executePOSTAPI(APIStandars.addEvent,{event:formValue.eventName, content:formValue.eventCnt, startDate:formValue.eventFrmDate, endDate:formValue.eventToDate, audi:data}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","You have successsfully added an event")
        this.dialog.closeAll()
        // this.dialogRef.afterClosed().subscribe(data=>{
        //   console.log(data);
          
        // })
        
      },
      (err)=>{
        this.notify.showDanger("Failed","Failed to complete operation")
      }
    )
  }

}
