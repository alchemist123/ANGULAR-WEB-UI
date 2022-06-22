import { Component, Input, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-lesson-plan-count',
  templateUrl: './lesson-plan-count.component.html',
  styleUrls: ['./lesson-plan-count.component.css']
})
export class LessonPlanCountComponent implements OnInit {

  @Input() lessonId: any;
  lessonPlanCount: any;
  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {
    this.getLessonPlanCounts()
  }

  getLessonPlanCounts(){
      this.comService.executePOSTAPI(APIStandars.getLessonPlanCountForTeacherAPI, {lessonId:this.lessonId}).subscribe((data)=>{
        this.lessonPlanCount = data
      })
  }

  get topicsCount(){
    var sum = 0
    for (var key in this.lessonPlanCount.topics){
        sum = sum + parseInt(this.lessonPlanCount.topics[key])
    }
    return sum
  }


}
