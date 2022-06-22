import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-unit-card',
  templateUrl: './student-unit-card.component.html',
  styleUrls: ['./student-unit-card.component.css']
})
export class StudentUnitCardComponent implements OnInit {

  @Input() unit:any

  constructor() { }

  ngOnInit(): void {
  }

}
