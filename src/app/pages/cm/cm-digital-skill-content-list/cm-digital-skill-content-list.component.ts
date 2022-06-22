import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-cm-digital-skill-content-list',
  templateUrl: './cm-digital-skill-content-list.component.html',
  styleUrls: ['./cm-digital-skill-content-list.component.css']
})
export class CmDigitalSkillContentListComponent implements OnInit {
  lessonId:any;
  contents: any = [];
  constructor(private router:Router, 
    private activatedRouter: ActivatedRoute,
    private comService: CommunicationService
    ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data:any)=>{
      this.lessonId= data["lessonId"];
      this.getDigitlaSkillContents()
    })
  }

  getDigitlaSkillContents(){
    this.comService.executePOSTAPI(APIStandars.listDigitalSkillContent,{lessonId:this.lessonId}).subscribe((data)=>{
        this.contents = data;
    })
  }


}
