import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-lesson-sub-levels',
  templateUrl: './lesson-sub-levels.component.html',
  styleUrls: ['./lesson-sub-levels.component.css']
})
export class LessonSubLevelsComponent implements OnInit {
  lessonId: any;
  chapterList=[] ;

  constructor(private comServices: CommunicationService, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      (data)=>{
        this.lessonId=data["id"]
        console.log(data);
        
      }
    )
    this.getLesson()
  }

  getLesson(){
    this.comServices.executePOSTAPI(APIStandars.HOD.listLessons,{parentLessonId:this.lessonId}).subscribe(
      (data:any)=>{
        console.log(data);
        this.chapterList = data.lessons;
         data.mapChapter.forEach((chapter)=>{
         this.chapterList.push(chapter[0])
        })
        console.log(this.chapterList);
        
      }
    )
  }
}
