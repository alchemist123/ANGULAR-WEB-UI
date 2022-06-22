import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-selection',
  templateUrl: './report-selection.component.html',
  styleUrls: ['./report-selection.component.css']
})
export class ReportSelectionComponent implements OnInit {

  lessonId:any;
  studentId: any;
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params)=>{
      this.lessonId = params['lessonId'];
      this.studentId = params['studentId'];
    })
  }

}
