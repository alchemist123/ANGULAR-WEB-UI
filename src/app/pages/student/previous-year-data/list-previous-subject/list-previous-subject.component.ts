import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-list-previous-subject',
  templateUrl: './list-previous-subject.component.html',
  styleUrls: ['./list-previous-subject.component.css']
})
export class ListPreviousSubjectComponent implements OnInit {
  subjectList: any;

  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {
    this.listSubjects()
  }

  listSubjects(){
    this.comService.executePOSTAPI(APIStandars.listPreviousSubjects,{}).subscribe(
      (data)=>{
        console.log(data);
        this.subjectList = data
      }
    )
  }

}
