import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import LessonStandards from "src/app/LessonStandards"
@Component({
  selector: 'app-board-chooser',
  templateUrl: './board-chooser.component.html',
  styleUrls: ['./board-chooser.component.css']
})
export class BoardChooserComponent implements OnInit {

  lessonId: any = ""
  type: any = ""
  forText = ""
  constructor(private activatedRouter: ActivatedRoute, private comService:CommunicationService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.lessonId = data["id"]
        this.type = data["type"]
        console.log(this.type);
        
        this.getLessonInfo()
      },(err)=>{

      }
    )
  }

  getLessonInfo(){
    this.comService.executePOSTAPI(APIStandars.getLessonForTeachers,{parentLessonId:this.lessonId}).subscribe(
      (data:any)=>{
        this.forText = LessonStandards[this.type] + " for the "+ LessonStandards[data.type] + " " + data.lessonName;
      }
    )
}
}
