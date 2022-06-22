import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.css']
})
export class ClassManagementComponent implements OnInit {

  stdList: any = []
  currentStd: any = ""
  divisionList: any = []
  currentDiv: any = ""


  constructor(private comService:CommunicationService, private notify: NotificationsService) { }

  ngOnInit(): void {
    this.refreshStdList()
    this.refreshDivList()
  }

  selectStd(std){
  console.log("selected parent", std)
  this.currentStd = std
  $('#standardModal').modal('show')
}
addStandardModal(){
  this.currentStd = ""
  $('#standardModal').modal('show')
}

addDivisionModal(){
  this.currentDiv = ""
  $('#divisionModal').modal('show')
}

  refreshStdList(){
    console.log("Event recieved")
  this.comService.executePOSTAPI(APIStandars.listStandardAPI,{}).subscribe(
    (data)=>{
      this.stdList = data
      $('#standardModal').modal('hide')
    },
    (err)=>{
      this.notify.showDanger("Error","Failed to fetch parent details.")
    }
  )
}

selectDiv(div){
  this.currentDiv = div
  $('#divisionModal').modal('show')
}

  refreshDivList(){
  this.comService.executePOSTAPI(APIStandars.listDivisionAPI,{}).subscribe(
    (data)=>{
      this.divisionList = data
      $('#divisionModal').modal('hide')
    },
    (err)=>{
      this.notify.showDanger("Error","Failed to fetch parent details.")
    }
  )
}

}
