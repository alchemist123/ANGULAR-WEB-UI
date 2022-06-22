import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-skills-home',
  templateUrl: './skills-home.component.html',
  styleUrls: ['./skills-home.component.css']
})
export class SkillsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      $("#iframe").contents().find(".embed-footer").removeClass(".embed-footer")
    },2000);
  }

}
