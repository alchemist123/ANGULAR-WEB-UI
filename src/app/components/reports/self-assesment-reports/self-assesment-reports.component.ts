import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-assesment-reports',
  templateUrl: './self-assesment-reports.component.html',
  styleUrls: ['./self-assesment-reports.component.css']
})
export class SelfAssesmentReportsComponent implements OnInit {

  @Input() reportData;
  constructor() { }

  ngOnInit(): void {
  }

}
