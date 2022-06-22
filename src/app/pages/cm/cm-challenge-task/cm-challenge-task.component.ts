import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { CmTaskModalComponent } from '../cm-task-modal/cm-task-modal.component';

@Component({
  selector: 'app-cm-challenge-task',
  templateUrl: './cm-challenge-task.component.html',
  styleUrls: ['./cm-challenge-task.component.css']
})
export class CmChallengeTaskComponent implements OnInit {
  challengeId: any;
  task: any;

  constructor(private matdialog:MatDialog,private activatedRouter: ActivatedRoute, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.challengeId = data["id"]
        console.log(this.challengeId);
        
      })
      this.listTask()
 }

 listTask(){
   this.comService.executePOSTAPI(APIStandars.listTask,{challengeId:this.challengeId}).subscribe(
     (data)=>{
       console.log(data);
       this.task = data
     }
   )
 }

 newTask(){
   var dialogRef = this.matdialog.open(CmTaskModalComponent, {
    data:{_id:this.challengeId}
  })
  dialogRef.afterClosed().subscribe(
    (data)=>{
      this.listTask()
    }
  )
 }

}
