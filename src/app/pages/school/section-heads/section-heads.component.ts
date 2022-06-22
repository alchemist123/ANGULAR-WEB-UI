import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import {MapSectionHeadComponent} from '../components/map-section-head/map-section-head.component'
@Component({
  selector: 'app-section-heads',
  templateUrl: './section-heads.component.html',
  styleUrls: ['./section-heads.component.css']
})
export class SectionHeadsComponent implements OnInit {

  sectionHeadList : any;
  displayedColumns: string[] = ['teacher', 'section'];
  sections = { 
    0: "Foundational ( Classes PreK - 2)",
    1: "Preparatory (Classes 3-5)",
    2: "Middle ( Classes 6-8)",
    3: "Secondary (Classes 9-12)"
  }

  constructor(public dialog: MatDialog, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.getSectionHeadList()
  }
  addSectionHead(){
    const dialogRef = this.dialog.open(MapSectionHeadComponent);
    dialogRef.afterClosed().subscribe(data => {
      this.getSectionHeadList();
    })
  }

  getSectionHeadList(){
    this.comService.executePOSTAPI(APIStandars.sectionHeadLists,{}).subscribe((data)=> {this.sectionHeadList = data 
    console.log(this.sectionHeadList);
    })


  }

}
