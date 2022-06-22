import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-chapter-card',
  templateUrl: './student-chapter-card.component.html',
  styleUrls: ['./student-chapter-card.component.css']
})
export class StudentChapterCardComponent implements OnInit {

  @Input() chapter: any;
 
  constructor() { }

  ngOnInit(): void {
  }

}
