import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-unit-theme-modal',
  templateUrl: './student-unit-theme-modal.component.html',
  styleUrls: ['./student-unit-theme-modal.component.css']
})
export class StudentUnitThemeModalComponent implements OnInit {
  theme: any;

  constructor( @Inject(MAT_DIALOG_DATA) public val: any) {
    console.log(val.theme);
    this.theme = val.theme
   }

  ngOnInit(): void {
  }

}
