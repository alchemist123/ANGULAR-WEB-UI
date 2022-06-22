import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { StudentUnitThemeModalComponent } from 'src/app/pages/student/student-unit-theme-modal/student-unit-theme-modal.component';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-hod-list-lesson',
  templateUrl: './hod-list-lesson.component.html',
  styleUrls: ['./hod-list-lesson.component.css']
})
export class HodListLessonComponent implements OnInit {
  lessonId:any
  lessons: any;
  chapterList=[] ;
  reviewStatus: any;
  units: any;
  theme: any;

  constructor(private comServices: CommunicationService, private activateRouter: ActivatedRoute,private dialog : MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      (data)=>{
            this.lessonId=data["id"]
          
            console.log(this.lessonId);
            
      }
    )
    this.listUnit()
  }

  listUnit(){
    this.comServices.executePOSTAPI(APIStandars.HOD.listUnitWithChapterTeacher,{parentLessonId:this.lessonId}).subscribe(
      (data)=>{
        console.log(data);
        this.units = data
      }
    )
  }


  openTheme(){
    var dialogRef = this.dialog.open(StudentUnitThemeModalComponent,{
      data:{theme:this.theme}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        
      }
    )
  }

  selectTheme(unit){
    this.theme = unit["theme"] 
    console.log("theme",this.theme);
    this.openTheme()
    
  }

  loadChapters(id){
    this.router.navigate(["/teacher/bookView/"+id])
    //this.router.navigate(["/student/getAssesmentQuestions/"+id+"/"+19])
  }

  // hodlistLessons(){
  //   this.comServices.executePOSTAPI(APIStandars.HOD.listLessons,{parentLessonId:this.lessonId}).subscribe(
  //     (data:any)=>{
  //       console.log(data);
        
  //        this.chapterList = data.lessons;
  //        data.mapChapter.forEach((chapter)=>{
  //        this.chapterList.push(chapter[0])
  //       })
  //       console.log(this.chapterList);
  //       this.reviewStatus =  this.chapterList[0]["reviwed"]
  //       console.log(this.reviewStatus);
        
  //     }
  //   )
  // }
}
