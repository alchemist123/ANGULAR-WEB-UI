import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-teacher-batch-manage',
  templateUrl: './teacher-batch-manage.component.html',
  styleUrls: ['./teacher-batch-manage.component.css']
})
export class TeacherBatchManageComponent implements OnInit {
  batch: any;

  constructor(private comService:CommunicationService, private notify: NotificationsService) { }

  ngOnInit(): void {
    this.listOwnBatch()
    localStorage.setItem("addModule","true")
  }

listOwnBatch(){
  this.comService.executePOSTAPI(APIStandars.listOwnBatch,{}).subscribe(
    (data)=>{
      console.log(data);
      this.batch = data
    }
  )
}

copiedMsg(){
  this.notify.showSuccess("Copied","")
}

}
