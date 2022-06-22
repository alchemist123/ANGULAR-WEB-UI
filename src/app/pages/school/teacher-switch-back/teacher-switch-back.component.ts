import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-teacher-switch-back',
  templateUrl: './teacher-switch-back.component.html',
  styleUrls: ['./teacher-switch-back.component.css']
})
export class TeacherSwitchBackComponent implements OnInit {
  mappingList: any;
  standardId: any;
  divisionId: any;
  teacherId: any;
  subjectId: any;
  id: any;
  constructor(private comService:CommunicationService, private notify: NotificationsService) { }

  ngOnInit(): void {
    this.listOffClass()
  }

  listOffClass(){
    this.comService.executePOSTAPI(APIStandars.listOffClass,{}).subscribe(
      (data)=>{
        this.mappingList = data
        console.log(data);
        
      }
    )
  }

  selectTeacher(teacher){
    console.log("select",teacher);
        this.standardId = teacher.standardId
        this.divisionId = teacher.divisionId
        this.teacherId  = teacher.teacherId
        this.subjectId  = teacher.subjectId 
        this.id = teacher.id
        console.log( this.id);
        this.switchBack()
  }

  switchBack(){
    this.comService.executePOSTAPI(APIStandars.switchBack,{standardId:this.standardId, divisionId:this.divisionId, teacherId:this.teacherId, subjectId: this.subjectId,id:this.id}).subscribe(
      (data)=>{
        this. listOffClass()
        console.log(data);
        this.notify.showSuccess("Sucess","")
      },
      (err)=>{
        this.notify.showDanger("Failed to complete the operation","")
      }
    )
  }

}
