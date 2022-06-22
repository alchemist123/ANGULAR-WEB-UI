import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;


@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.css']
})
export class TeacherManagementComponent implements OnInit {

  teachersList: any = []
  currentTeacher: any = ""
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

  selectTeacher(teacher){
  console.log("selected teacher", teacher)
  this.currentTeacher = teacher
  $('#teacherModal').modal('show')
}

  refreshList(){
    console.log("Event recieved")
  this.comService.executePOSTAPI(APIStandars.listTeacherAPI,{}).subscribe(
    (data)=>{
      this.teachersList = data
      $('#teacherModal').modal('hide')
    },
    (err)=>{
      this.notify.showDanger("Error","Failed to fetch teacher details.")
    }
  )
}

}