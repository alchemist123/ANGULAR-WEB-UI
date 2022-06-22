import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {

  staffsList: any = []
  currentStaff: any = ""
  query:any
  constructor(private comService:CommunicationService, private notify: NotificationsService) { }

  ngOnInit(): void {
    this.refreshList()

    setTimeout(()=>{
      $('#datepicker').datepicker({
        //format: 'dd-mm-yyyy',
        autoclose: true,
    });
     },
     200)
  }

  selectStaff(staff){
  console.log("selected staff", staff)
  this.currentStaff = staff
  $('#staffModal').modal('show')
}

  refreshList(){
    console.log("Event recieved")
  this.comService.executePOSTAPI(APIStandars.listStaffAPI,{}).subscribe(
    (data)=>{
      this.staffsList = data
      console.log(this.staffsList);
      
      $('#staffModal').modal('hide')
    },
    (err)=>{
      this.notify.showDanger("Error","Failed to fetch staff details.")
    }
  )
}

}