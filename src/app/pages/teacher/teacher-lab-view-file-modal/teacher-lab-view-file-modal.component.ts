import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-teacher-lab-view-file-modal',
  templateUrl: './teacher-lab-view-file-modal.component.html',
  styleUrls: ['./teacher-lab-view-file-modal.component.css']
})
export class TeacherLabViewFileModalComponent implements OnInit {
  content:any
  contentType: any;

  constructor(public sanitizer: DomSanitizer,@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log(data.content);
    this.content = data.content
    this.contentType = data.contentType
  }

  ngOnInit(): void {
  }

  get TypeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.content);
  }
}
