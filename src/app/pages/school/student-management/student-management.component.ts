import { Component, OnInit } from '@angular/core';
import { AnyObject } from 'chart.js/types/basic';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  studentsList: any = []
  currentStudent: any = ""
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

  selectStudent(student){
  console.log("selected student", student)
  this.currentStudent = student
  $('#studentModal').modal('show')
}

  refreshList(){
    console.log("Event recieved")
  this.comService.executePOSTAPI(APIStandars.listStudentAPI,{}).subscribe(
    (data)=>{
      this.studentsList = data
      console.log(this.studentsList);
      
      $('#studentModal').modal('hide')
    },
    (err)=>{
      this.notify.showDanger("Error","Failed to fetch student details.")
    }
  )
}

}
