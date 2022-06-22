import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { LabChallengesModalComponent } from '../lab-challenges-modal/lab-challenges-modal.component';
import { LabInventoryModalComponent } from '../lab-inventory-modal/lab-inventory-modal.component';

@Component({
  selector: 'app-lab-microcontroller',
  templateUrl: './lab-microcontroller.component.html',
  styleUrls: ['./lab-microcontroller.component.css']
})
export class LabMicrocontrollerComponent implements OnInit {
  parentLessonId: any;
  inventory: any;
  typeValue = []
  type = []

  constructor(private matdialog:MatDialog,private activatedRouter: ActivatedRoute, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.parentLessonId = data["parentLessonId"]
        console.log(this.parentLessonId);
        
      })
      this.listInventoryContent()
  }

  listInventoryContent(){
    this.comService.executePOSTAPI(APIStandars.listInventory,{parentLessonId:this.parentLessonId}).subscribe(
      (data)=>{
        this.inventory = data
        
      }
    )
  }

  newCourse(){
    var dialogRef = this.matdialog.open(LabInventoryModalComponent, {   
      height: '95%',
      autoFocus: false,
      data:{_id:this.parentLessonId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
       this.listInventoryContent()
      }
    )
  }

  challenges(){
    var dialogRef = this.matdialog.open(LabChallengesModalComponent,  {
      data:{_id:this.parentLessonId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
       this.listInventoryContent()
      }
    )
  }
}
