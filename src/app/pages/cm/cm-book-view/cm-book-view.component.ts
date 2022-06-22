import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cm-book-view',
  templateUrl: './cm-book-view.component.html',
  styleUrls: ['./cm-book-view.component.css']
})
export class CmBookViewComponent implements OnInit {
  lesson: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeActiveLesson($event){
    this.lesson = $event
  }

}
