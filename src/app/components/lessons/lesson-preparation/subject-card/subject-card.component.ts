import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

  @Input() subject: any;
  constructor() { }

  ngOnInit(): void {
  }

}
