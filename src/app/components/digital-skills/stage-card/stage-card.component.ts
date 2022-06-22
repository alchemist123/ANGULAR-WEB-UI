import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage-card',
  templateUrl: './stage-card.component.html',
  styleUrls: ['./stage-card.component.css']
})
export class StageCardComponent implements OnInit {
@Input() stage;
  constructor() { }

  ngOnInit(): void {
  }

}
