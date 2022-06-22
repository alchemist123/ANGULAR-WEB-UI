import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-cm-add-level-modal',
  templateUrl: './cm-add-level-modal.component.html',
  styleUrls: ['./cm-add-level-modal.component.css']
})
export class CmAddLevelModalComponent implements OnInit {
  school: any;
  levelUPForm:any
  schoolsId: any;
  teachers: any;
  constructor(private dialogRef:MatDialog, private comService: CommunicationService,private fb:FormBuilder,private notify: NotificationsService) { }

  ngOnInit(): void {
    this.levelUPForm = this.fb.group({
      school:["",Validators.required],
      teacher:["", Validators.required],
      level:["", Validators.required],
      type:["", Validators.required]
    })
    this.listSchool()
    //this.listTeacher()
  }
  listSchool(){
    this.comService.executePOSTAPI(APIStandars.listSchool,{}).subscribe(
      (data)=>{
        console.log(data);
        this.school = data
      }
    )
  }

  onSelect(datas){
    this.schoolsId = datas
    console.log("id",datas);
    this.listTeacher()
  }

  listTeacher(){
    this.comService.executePOSTAPI(APIStandars.listTeachersOfSchool,{schoolId:this.schoolsId}).subscribe(
      (data)=>{
        console.log(data);
        this.teachers = data
        
      }
    )
  }

  assignLevels(){
    console.log(this.levelUPForm.value);
    this.comService.executePOSTAPI(APIStandars.assignLevels,{userId:this.levelUPForm.value.teacher, level:this.levelUPForm.value.level}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
        this.dialogRef.closeAll()
      },
      (err)=>{
        this.notify.showDanger("Failed", "")
      }
    )
    
  }

}
