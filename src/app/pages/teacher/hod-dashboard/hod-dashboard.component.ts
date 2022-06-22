import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent implements OnInit {
  teachers: any;

  constructor(private comService:CommunicationService) { }

  ngOnInit(): void {
    localStorage.setItem("HODMODE","true")
    this.listTeachers()
  }

  listTeachers(){
    this.comService.executePOSTAPI(APIStandars.HOD.listTeachers,{}).subscribe(
      (data)=>{
        this.teachers=data
        console.log( this.teachers);
        console.log(data);
        
      }
    )
  }

}
