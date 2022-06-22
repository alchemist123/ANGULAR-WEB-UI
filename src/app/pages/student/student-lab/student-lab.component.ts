import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-student-lab',
  templateUrl: './student-lab.component.html',
  styleUrls: ['./student-lab.component.css']
})
export class StudentLabComponent implements OnInit {
  courseList: any;

  constructor( private comService: CommunicationService) { }

  ngOnInit(): void {
    this.listLesson()
  }

  listLesson(){
    this.comService.executePOSTAPI(APIStandars.listLabChapters,{}).subscribe(
      (data)=>{
        console.log(data);
        this.courseList = data
      }
    )
  }

}
