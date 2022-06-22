import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-lesson-card',
  templateUrl: './digital-lesson-card.component.html',
  styleUrls: ['./digital-lesson-card.component.css']
})
export class DigitalLessonCardComponent implements OnInit {

  @Input() lessonData: any;
  lessonType: string

  constructor() { }

  ngOnInit(): void {
    if(this.lessonData.type == 0){
      this.lessonType = "Beginner"
    }
    if(this.lessonData.type == 1){
      this.lessonType = "Medium"
    }
    if(this.lessonData.type == 2){
      this.lessonType = "Advanced"
    }
  }

}
