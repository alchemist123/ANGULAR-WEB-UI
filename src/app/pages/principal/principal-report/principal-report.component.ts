import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal-report',
  templateUrl: './principal-report.component.html',
  styleUrls: ['./principal-report.component.css']
})
export class PrincipalReportComponent implements OnInit {
  lessonId: string;

  constructor( private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params =>this.lessonId=params.id)
  }

}
