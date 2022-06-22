import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-content-card',
  templateUrl: './digital-content-card.component.html',
  styleUrls: ['./digital-content-card.component.css']
})
export class DigitalContentCardComponent implements OnInit {

  @Input() lessonData;
  constructor() { }

  ngOnInit(): void {
  }

}
