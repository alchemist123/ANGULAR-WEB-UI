import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { AddUnitModalComponent } from '../add-unit-modal/add-unit-modal.component';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  lessonId: any;
  unit: any;
  unitId: any;
  lessonAdded: Object;
  lessonStatus: any;

  constructor(private comService: CommunicationService, private router:Router, private activatedRouter: ActivatedRoute, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.lessonId = data["id"]
        console.log(this.lessonId);
        
      }
    )
    this.listUnit()
    console.log("Initializing");
    //this.totalLessonAdded()
  }
  
  

  listUnit(){
    this.comService.executePOSTAPI(APIStandars.listUnit,{parentLessonId:this.lessonId}).subscribe(
      (data)=>{
        this.unit = data
      }
    )
  }

  addUnit(){
    var dialogRef = this.dialog.open(AddUnitModalComponent, {
      height: '100%',
      autoFocus: false,
      data:{id:this.lessonId}
    }) 
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listUnit()
      }
    )
  }

  selectUnit(unitId,parentLessonId){
    this.unitId = unitId
    this.router.navigate(["teacher/chapters/"+unitId,this.lessonId,parentLessonId])
  }

  // totalLessonAdded(){
  //   ///localStorage.setItem("lessonId",this.lessonId)
  //   let standardId=localStorage.getItem("standardId")
  //   let divisionId=localStorage.getItem("divisionId")
  //   console.log("div",divisionId);
  //   console.log("st",standardId);
 
  //   this.comService.executePOSTAPI(APIStandars.ifTotalLessonAdded, {lessonId:this.lessonId, standardId:standardId, divisionId:divisionId}).subscribe(
  //     (data)=>{
  //       this.lessonAdded=data
  //       this.lessonStatus=data["status"]
  //       console.log(this.lessonStatus);
        
  //     }
  //   )
  // }
}
