import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sublevel-card',
  templateUrl: './sublevel-card.component.html',
  styleUrls: ['./sublevel-card.component.css']
})
export class SublevelCardComponent implements OnInit {

  @Input() unit ={lessonNumber:"", lessonName:"", type:"", typeText:""}
  @Input() typeText = ""
  @Input() isActivity = ""
  @Input() isCompleted = ""
  
  constructor() { }

  ngOnInit(): void {
    this.unit.typeText = this.typeText
  }

}
