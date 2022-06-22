import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-subject-card',
  templateUrl: './student-subject-card.component.html',
  styleUrls: ['./student-subject-card.component.css']
})
export class StudentSubjectCardComponent implements OnInit {

  @Input() subject;

  @Input() teacher;
  
  constructor() { }

  ngOnInit(): void {
  }

}
