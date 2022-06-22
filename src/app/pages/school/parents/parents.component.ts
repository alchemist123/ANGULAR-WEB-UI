import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

declare var $: any;

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})

export class ParentsComponent implements OnInit {

  parentsList: any = []
  currentParent: any = ""
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

  selectParent(parent){
  console.log("selected parent", parent)
  this.currentParent = parent
  $('#parentModal').modal('show')
}

  refreshList(){
    console.log("Event recieved")
  this.comService.executePOSTAPI(APIStandars.listOfParents,{}).subscribe(
    (data)=>{
      this.parentsList = data
      $('#parentModal').modal('hide')
    },
    (err)=>{
      this.notify.showDanger("Error","Failed to fetch parent details.")
    }
  )
}

}
