import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  @Input() classList:any = []
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  selectedClass(stdId, divisionId){
      if(this.auth.activeUser.userType == "staff"){
        this.router.navigate([`/principal/subjects/${stdId}/${divisionId}`])
      }
      if(this.auth.activeUser.userType == "teacher"){
        this.router.navigate([`/teacher/section-subjects/${stdId}/${divisionId}`])
      }
  }

}
