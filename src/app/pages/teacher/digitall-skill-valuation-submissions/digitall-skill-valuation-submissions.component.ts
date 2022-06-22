import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-digitall-skill-valuation-submissions',
  templateUrl: './digitall-skill-valuation-submissions.component.html',
  styleUrls: ['./digitall-skill-valuation-submissions.component.css']
})
export class DigitallSkillValuationSubmissionsComponent implements OnInit {
  standardId: string;
  divisionId: string;
  lessonId: string;
  assignmentList:any = []
  constructor(private comService: CommunicationService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
        this.standardId = params.standardId;
        this.divisionId = params.divisionId;
        this.lessonId = params.skillId;
        this.getAssignmentLessons()
    })
  }

  getSubmissions(){
      //this.comService.executePOSTAPI(APIStandars.)
  }

  getAssignmentLessons(){
    this.comService.executePOSTAPI(APIStandars.listDigitalSkillContent,{lessonId:this.lessonId}).subscribe((data:any)=>{
      this.assignmentList = data.filter((ele)=>ele.type=='1')
    })
  }

}
