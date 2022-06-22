import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { ChapterAddModalComponent } from '../chapter-add-modal/chapter-add-modal.component';
declare var $;
@Component({
  selector: 'app-chapter-selection-direct',
  templateUrl: './chapter-selection-direct.component.html',
  styleUrls: ['./chapter-selection-direct.component.css']
})
export class ChapterSelectionDirectComponent implements OnInit {
  chapterId: any;
  chapterList = []
  type: any;
  lessonAdded: Object;
  lessonStatus: any;
  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute, private notifications: NotificationsService,private router: Router, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.chapterId = data["id"]
        this.type = data["type"]
        console.log(this.chapterId);
        
        this.refreshList()
        
      }
    )
    this.totalLessonAdded()
  }

  refreshList(){
    $('#chapterModal').modal('hide');
    this.comService.executePOSTAPI(APIStandars.listLessonsForTeachers, {type:"0", parentLessonId:this.chapterId}).subscribe(
      (data:any)=>{
        console.log("tea",data);
        if(data.lessons.length>0)
          
        this.chapterList = data.lessons;
        data.mapChapter.forEach((chapter)=>{
        this.chapterList.push(chapter.chapter[0])
        console.log("data", this.chapterList);
        })
      },
      (err)=>{
        this.notifications.showDanger("Failed", "Failed to fetch data")
      }
      )
  }

  
  openChapterModal(){
    $('#chapterModal').modal('show');

  }

  selectChapter(chapterId){
    console.log(chapterId);
    
    this.router.navigate(["/teacher/sublevels/"+chapterId+"/"+this.type])
  }

  totalLessonAdded(){
    ///localStorage.setItem("lessonId",this.lessonId)
    let standardId=localStorage.getItem("standardId")
    let divisionId=localStorage.getItem("divisionId")
    console.log("div",divisionId);
    console.log("st",standardId);
 
    this.comService.executePOSTAPI(APIStandars.ifTotalLessonAdded, {lessonId:this.chapterId, standardId:standardId, divisionId:divisionId}).subscribe(
      (data)=>{
        this.lessonAdded=data
        this.lessonStatus=data["status"]
        console.log(this.lessonStatus);
        
      }
    )
  }

  addChapter() {
    var dialogRef = this.dialog.open(ChapterAddModalComponent,{
      data:{lessonId:this.chapterId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.totalLessonAdded()
      }
    )
  }

  // totalLessonAdded(){
  //   localStorage.setItem("lessonId",this.chapterId)
  //   let standardId=localStorage.getItem("standardId")
  //   let divisionId=localStorage.getItem("divisionId")
  //   console.log("div",divisionId);
  //   console.log("st",standardId);
  //   console.log(this.lessonId);
  //   this.comService.executePOSTAPI(APIStandars.ifTotalLessonAdded, {unitId:this.unitId,lessonId:this.parentLessonId, standardId:standardId, divisionId:divisionId}).subscribe(
  //     (data)=>{
  //       this.lessonAdded=data
  //       this.lessonStatus=data["status"]
  //       this.idd=data["id"]
  //       console.log(this.idd);
  //       localStorage.setItem("id",this.idd)
  //       console.log("tval",data);
  //       console.log(this.lessonStatus);
        
  //     }
  //   )
  // }


}
