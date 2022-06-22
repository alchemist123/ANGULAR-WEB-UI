import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-submission-form',
  templateUrl: './assignment-submission-form.component.html',
  styleUrls: ['./assignment-submission-form.component.css']
})
export class AssignmentSubmissionFormComponent implements OnInit {
  @Input()  lessonId: string;
  type: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
