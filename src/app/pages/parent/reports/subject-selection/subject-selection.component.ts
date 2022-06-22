import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-subject-selection',
  templateUrl: './subject-selection.component.html',
  styleUrls: ['./subject-selection.component.css']
})
export class SubjectSelectionComponent implements OnInit {

  studentId: any;
  divisionId: any;
  standardId: any;
  subjectList = [];
  assignId: any;
  constructor(private activatedRouter: ActivatedRoute,private comService: CommunicationService, private router: Router, private utilService:UtilsService) { }

  ngOnInit(): void {
      this.activatedRouter.params.subscribe((data: any) => {
        this.studentId = data.studentId;
        this.divisionId = data.divisionId;
        this.standardId = data.standardId;
        this.getSubjects()
      })
  }

  getSubjects(){
     this.comService.executePOSTAPI(APIStandars.getSubjectListForParentAPI,{standardId: this.standardId, divisionId: this.divisionId}).subscribe((data:any)=>{
       this.subjectList = data
     })
  }

  selectSubject(i){
    this.utilService.updatePathName("/parent/lesson-list/"+ this.subjectList[i]._id+"/"+this.studentId, this.subjectList[i].subject[0].subject);
    this.router.navigate(["/parent/lesson-list/"+ this.subjectList[i]._id+"/"+this.studentId])
  }

}
