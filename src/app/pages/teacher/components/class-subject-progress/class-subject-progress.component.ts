import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-class-subject-progress',
  templateUrl: './class-subject-progress.component.html',
  styleUrls: ['./class-subject-progress.component.css']
})
export class ClassSubjectProgressComponent implements OnInit {

  progressData: any = {}
  constructor(private comService:CommunicationService) { }

  ngOnInit(): void {
    this.getSubjectsCompletion()
  }

  getSubjectsCompletion(){
      this.comService.executePOSTAPI(APIStandars.classTeacher.subjectProgress,{}).subscribe((response)=>{
          this.progressData = response
      })
  }

}
