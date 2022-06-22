import { Component, Input, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-assesmnt-preview',
  templateUrl: './assesmnt-preview.component.html',
  styleUrls: ['./assesmnt-preview.component.css']
})
export class AssesmntPreviewComponent implements OnInit {

  @Input() lessonId:any;
  @Input() assesmentType: any;
  lessonData: any;
  constructor(private comService: CommunicationService, private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.getAssesmentQuestions()
  }

  ngOnChanges(){
    this.getAssesmentQuestions()
  }


  getAssesmentQuestions(){
      this.comService.executePOSTAPI(APIStandars.student.assesmentPreview,{lessonId:this.lessonId, lessonType:this.assesmentType}).subscribe((data)=>{
        this.lessonData = data;
      })
  }

}
