import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-digitall-skill-valuation-list',
  templateUrl: './digitall-skill-valuation-list.component.html',
  styleUrls: ['./digitall-skill-valuation-list.component.css']
})
export class DigitallSkillValuationListComponent implements OnInit {

  digitalLesson: any = []
  standardId: string;
  divisionId: string;
  constructor(private comService:CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.standardId = params["standardId"]
      this.divisionId = params["divisionId"]
    })
    this.comService.executePOSTAPI(APIStandars.listDigitalSkillsForTeacherAPI,{}).subscribe((data) => {this.digitalLesson = data})
  }

}
