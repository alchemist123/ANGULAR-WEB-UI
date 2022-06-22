import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { AddUnitModalComponent } from '../add-unit-modal/add-unit-modal.component';
import { ChapterAddModalComponent } from '../chapter-add-modal/chapter-add-modal.component';
declare var $;
@Component({
  selector: 'app-chapter-selection',
  templateUrl: './chapter-selection.component.html',
  styleUrls: ['./chapter-selection.component.css']
})
export class ChapterSelectionComponent implements OnInit {

  addChapterForm:any
  chapterList:any=[]
  lessonId: any;
  lessonStatus:any
  lessonAdded:any
  idd: any;
  chapterStatus: any;
  standardId: any;
  divisionId: any;
  lessonIdd: any;
  reviewStatus: void;
  unitId: any;
  parentId: any;
  parentLessonId: any;
  subjectId: any;
  chapterLists: any=[];
  type: any;
  isActivityLoaded = false
  
  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute, private notifications: NotificationsService,private router: Router, private dialog : MatDialog) { }
  
  ngOnInit(): void {
    
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.unitId = data["id"]
       
        console.log(this.unitId);
        this.parentId = data["parentId"]
        this.parentLessonId = data["parentLessonId"]
        console.log( this.parentLessonId);
        this.subjectId = localStorage.getItem("mappingId")
        this.lessonIdd=localStorage.getItem("lessonId")
        this.divisionId=localStorage.getItem("divisionId")
        this.standardId=localStorage.getItem("standardId")
        console.log(this.lessonIdd, this.divisionId, this.standardId);
        this.lessonId = data["id"]
        console.log("Data recieved", this.lessonId)
        this.refreshList()
       
      }
    )
    this.totalLessonAdded()
    this.completedChapterStatus()
  }

  ngOnChange(){
    this.totalLessonAdded()
  }



  openChapterModal(){
    $('#chapterModal').modal('show');

  }

  refreshList(){
    $('#chapterModal').modal('hide');
    this.comService.executePOSTAPI(APIStandars.listChapterinUnit, {unitId:this.unitId}).subscribe(
      (data:any)=>{
         data.map((item)=>{
           this.chapterList.push(...item.lesson)
           console.log("data", this.chapterList);
         })
         this.isActivityLoaded = true
        console.log("data", this.chapterList);
      },
      (err)=>{
        this.notifications.showDanger("Failed", "Failed to fetch data")
      }
      )
  }

 

  getReviewStatus(reviwed){
   //return this.reviewStatus.includes(reviwed)
  }

  selectChapter(chapterId,status){
    console.log(chapterId);
    
    this.router.navigate(["/teacher/sublevels/"+chapterId+"/"+this.parentLessonId+"/"+this.unitId])
  }

  getParentInfo(){
    
  }

  completedChapterStatus(){
    this.comService.executePOSTAPI(APIStandars.completedChapter,{lessonId:this.lessonIdd, standardId:this.standardId, divisionId:this.divisionId}).subscribe(
      (data)=>{
        this.chapterStatus=data
        console.log(data);
        
      }
    )
  }

  getStatus(_id){
    //return this.chapterStatus.includes(_id)
  }

  totalLessonAdded(){
    localStorage.setItem("lessonId",this.lessonId)
    let standardId=localStorage.getItem("standardId")
    let divisionId=localStorage.getItem("divisionId")
    console.log("div",divisionId);
    console.log("st",standardId);
    console.log(this.lessonId);
    this.comService.executePOSTAPI(APIStandars.ifTotalLessonAdded, {unitId:this.unitId,lessonId:this.parentLessonId, standardId:standardId, divisionId:divisionId}).subscribe(
      (data)=>{
        this.lessonAdded=data
        this.lessonStatus=data["status"]
        this.idd=data["id"]
        console.log(this.idd);
        localStorage.setItem("id",this.idd)
        console.log("tval",data);
        console.log(this.lessonStatus);
        
      }
    )
  }

  addChapter() {
    var dialogRef = this.dialog.open(ChapterAddModalComponent,{
      data:{lessonId:this.parentLessonId,
            unitId:this.unitId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.totalLessonAdded()
      }
    )
  }

  addUnit(){
    var dialogRef = this.dialog.open(AddUnitModalComponent, {
      data:{unitId:this.unitId,
            parentId:this.parentId}
    }) 
    dialogRef.afterClosed().subscribe(
      (data)=>{
        //this.listUnit()
      }
    )
  }

  deleteUnit(){
    this.comService.executePOSTAPI(APIStandars.deleteUnit,{unitId:this.unitId}).subscribe(
      (data)=>{
        console.log(data);
        this.notifications.showSuccess("Succes", "You are successfully deleted this unit")
        this.router.navigate(["/teacher/unit/"+this.subjectId])
      },
      (err)=>{
        this.notifications.showDanger("Failed", "Failed to delete unit")
      }
    )
  }

  // totalLessonCount(){
  //   this.comService.executePOSTAPI(APIStandars.addTotalLessonCount,{noOfLessons:this.addChapterForm.value}).subscribe(
  //     (data)=>{
  //       console.log(data);
        
  //     }
  //   )
  // }

}
