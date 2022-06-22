import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-section-classes',
  templateUrl: './section-classes.component.html',
  styleUrls: ['./section-classes.component.css']
})
export class SectionClassesComponent implements OnInit {

  sectionId: any = "";
  classes: any = [];
  constructor(private activatedRoute: ActivatedRoute, private comServices: CommunicationService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.sectionId = data["sectionId"]
      console.log(data);
      this.getClasses()
    })
  }

  getClasses(){
      this.comServices.executePOSTAPI(APIStandars.principal.getSectionWiseClasses,{type:this.sectionId}).subscribe((data)=>{
        this.classes = data
        console.log(data);
        
      })
  }

}
