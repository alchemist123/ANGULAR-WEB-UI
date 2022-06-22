import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-lesson-selection',
  templateUrl: './lesson-selection.component.html',
  styleUrls: ['./lesson-selection.component.css']
})
export class LessonSelectionComponent implements OnInit {
  lessonList = []
  subjectId: any;
  studentId: any;

  constructor(private comService:CommunicationService, 
              private notify: NotificationsService, 
              private activatedRouter: ActivatedRoute, private router: Router, private utilsService: UtilsService) { }

  ngOnInit(): void {
    console.log("Path name is", window.location.pathname)
    this.activatedRouter.params.subscribe((params)=>{
      this.studentId = params['studentId'];
      this.subjectId = params['subjectId'];
      this.getLessons();
    })
  }

  getLessons(){
      this.comService.executePOSTAPI(APIStandars.getLessonListForParentAPI,{parentLessonId: this.subjectId}).subscribe((data:any)=>{
          this.lessonList = data.lessons
          data.mapChapter.forEach((chapter)=>{
            this.lessonList.push(chapter.chapter[0])
          })
      })
  }
  selectLesson(i){
    var routerLink="/parent/report-selection/"+this.lessonList[i]._id+"/"+this.studentId
    this.utilsService.updatePathName(routerLink,this.lessonList[i].lessonName)
    this.router.navigate([routerLink])
  }

}
