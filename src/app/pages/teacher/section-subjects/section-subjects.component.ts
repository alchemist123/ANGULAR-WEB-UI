import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-section-subjects',
  templateUrl: './section-subjects.component.html',
  styleUrls: ['./section-subjects.component.css']
})
export class SectionSubjectsComponent implements OnInit {

  subjects:any = [];
  constructor(private comService: CommunicationService, 
              private activatedRouter: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
        this.getSubejcts(data["standard"], data["division"])
    })
  }

  getSubejcts(standardId, divisionId){
    this.comService.executePOSTAPI(APIStandars.sectionHead.listSubjectTeacher,{standardId, divisionId}).subscribe((data)=>{
      this.subjects = data;
    })

  }

}
