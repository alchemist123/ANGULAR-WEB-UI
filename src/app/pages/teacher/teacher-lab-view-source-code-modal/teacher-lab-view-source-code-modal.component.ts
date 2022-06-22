import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-teacher-lab-view-source-code-modal',
  templateUrl: './teacher-lab-view-source-code-modal.component.html',
  styleUrls: ['./teacher-lab-view-source-code-modal.component.css']
})
export class TeacherLabViewSourceCodeModalComponent implements OnInit {
  codeData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.codeData = data.code
   }

  ngOnInit(): void {
  }

}
