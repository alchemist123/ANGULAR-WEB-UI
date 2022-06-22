import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-section-dashboard',
  templateUrl: './section-dashboard.component.html',
  styleUrls: ['./section-dashboard.component.css']
})
export class SectionDashboardComponent implements OnInit {

  classes: any = []
  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {
   this.getClasses()
  }

  getClasses(){
      this.comService.executePOSTAPI(APIStandars.sectionHead.listClasses,{}).subscribe((data)=>{
        this.classes = data;
      })
  }

}
