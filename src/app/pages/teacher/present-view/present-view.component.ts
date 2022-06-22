import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-present-view',
  templateUrl: './present-view.component.html',
  styleUrls: ['./present-view.component.css']
})
export class PresentViewComponent implements OnInit {

  lessonId = ""
  lessonDetails:any =""
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params =>this.lessonId=params.id)
  }
  getLessonInfo(){

  }

}
