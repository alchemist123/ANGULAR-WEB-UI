import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-teacher-lab-evaluation',
  templateUrl: './teacher-lab-evaluation.component.html',
  styleUrls: ['./teacher-lab-evaluation.component.css']
})
export class TeacherLabEvaluationComponent implements OnInit {
  courseList: any;

  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {
    this.listClass()
  }

  listClass(){
    
      this.comService.executePOSTAPI(APIStandars.listMentorClass,{}).subscribe(
        (data)=>{
          console.log(data);
          this.courseList = data
        }
      )
    }
  

  // listLesson(){
  //   this.comService.executePOSTAPI(APIStandars.listteacherLabChapters,{}).subscribe(
  //     (data)=>{
  //       console.log(data);
  //       this.courseList = data
  //     }
  //   )
  // }
}
