import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.css']
})
export class ChapterCardComponent implements OnInit {

  @Input() chapter :any
  @Input() chapter2 :any
  @Input() chapterStatus = ""
  @Input() reviewStatus = ""
  constructor() { }

  ngOnInit(): void {
  }

}
