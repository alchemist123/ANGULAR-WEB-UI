import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-section-chapater-list',
  templateUrl: './section-chapater-list.component.html',
  styleUrls: ['./section-chapater-list.component.css']
})
export class SectionChapaterListComponent implements OnInit {

  lessons:any = []
  constructor(private activatedRouter: ActivatedRoute, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
      this.getChapters(data["id"])
    })
  }
  getChapters(id){
      this.comService.executePOSTAPI(APIStandars.sectionHead.listLessons,{parentLessonId:id}).subscribe((data:any)=>{
          this.lessons =data["lessons"]
          data.mapChapter.forEach((chapter)=>{
            this.lessons.push(chapter[0])
          })
      })
  }

}
