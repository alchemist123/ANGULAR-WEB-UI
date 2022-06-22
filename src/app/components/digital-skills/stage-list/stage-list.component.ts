import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {
  
  stages = [
    {
      
      name: "ACQUIRING DIGITAL SKILLS", 
      week:"WEEKS 1 & 2",
      status: "1",
      stageId:0
    },
    {
      name: "BUILD A DIGITAL PRODUCT", 
      week:"WEEKS 3 & 4",
      status: "0",
      stageId:1
    },
    {
      name: "REFINE THE PRODUCT", 
      week:"WEEK 5",
      status: "0",
      stageId:2
    },{
      name: "CREATE A BUSSINESS MODEL", 
      week:"WEEK 6",
      status: "0",
      stageId:3
    },{
      name: "DIGITAL MARKETING", 
      week:"WEEK 7",
      status: "0",
      stageId:4
    },{
      name: "SET UP ONLINE STORE", 
      week:"WEEK 8",
      status: "0",
      stageId:5
    },{
      name: "BUSSINESS FINANCE", 
      week:"WEEK 9",
      status: "0",
      stageId:6
    },{
      name: "ONLINE BUSSINESS", 
      week:"WEEK 10 & 11",
      status: "0",
      stageId:7
    },
    {
      name: "PITCHING", 
      week:"WEEK 12",
      status: "0",
      stageId:8
    },
  ]

  constructor(private router: Router, private authService: AuthService) { }


  loadStage(stageId) {
    if(stageId==0){
        this.router.navigate([`/${this.authService.activeUser.userType}/digital-skill-types`]);
    }
    else { 

    }
  }

  ngOnInit(): void {
  }

}
