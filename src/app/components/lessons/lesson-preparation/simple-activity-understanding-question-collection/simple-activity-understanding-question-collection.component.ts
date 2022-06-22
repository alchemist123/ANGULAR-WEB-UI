import { Component, Input, OnInit } from '@angular/core';
import ContentStandards from 'src/app/ContentStandards';
import LessonStandards from 'src/app/LessonStandards';

@Component({
  selector: 'app-simple-activity-understanding-question-collection',
  templateUrl: './simple-activity-understanding-question-collection.component.html',
  styleUrls: ['./simple-activity-understanding-question-collection.component.css']
})
export class SimpleActivityUnderstandingQuestionCollectionComponent implements OnInit {

  @Input() unit ={lessonNumber:"", lessonName:"", type:"", typeText:"", contents:[], _id:""}
  @Input() concept:any
  @Input() typeText = ""
  @Input() parentId: any;
  @Input() refId: any;
  mediaType = ""
  datas: any;
  
  constructor() { }

  ngOnInit(): void {
    this.unit.typeText = LessonStandards[this.unit.type]
    this.mediaType = ContentStandards[this.unit.contents[0].contentType]
    console.log(this.concept);
  }

}
