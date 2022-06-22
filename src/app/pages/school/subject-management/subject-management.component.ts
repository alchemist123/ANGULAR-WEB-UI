import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  styleUrls: ['./subject-management.component.css']
})
export class SubjectManagementComponent implements OnInit {

  subjectList: any = []
  currentSubject: any = ""
  constructor(private comService:CommunicationService, private notify: NotificationsService) { }

  ngOnInit(): void {
    this.refreshList()

  }

  selectSubject(subject){
  console.log("selected subject", subject)
  this.currentSubject = subject
  $('#subjectModal').modal('show')
}

  refreshList(){
    console.log("Event recieved")
  this.comService.executePOSTAPI(APIStandars.listSubjectAPI,{}).subscribe(
    (data)=>{
      this.subjectList = data
      console.log(this.subjectList);
      
      $('#subjectModal').modal('hide')
    },
    (err)=>{
      console.log(err)
      this.notify.showDanger("Error","Failed to fetch subject details.")
    }
  )
}

addSubject(){
  this.currentSubject = ""
  $('#subjectModal').modal('show')


}

}
