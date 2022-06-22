import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-activity-list-selection',
  templateUrl: './activity-list-selection.component.html',
  styleUrls: ['./activity-list-selection.component.css']
})
export class ActivityListSelectionComponent implements OnInit {

  lessonId: any;
  activities: any = [];
  type: any;
  types: any;
  datas: any;
  activity: any;
  parent: any;
  activityData = []
  isActivityLoaded = false
  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {this.lessonId = params['lessonId'];
      this.getListOfActivities();
  });
  }

  getListOfActivities(){
      this.comService.executePOSTAPI(APIStandars.teacher.listActivities,{lessonId:this.lessonId}).subscribe((data:any)=>{
    
            data.map((item)=>{
            this.activityData.push({...item.parent, acitvityData:item.activity})
          })
          this.isActivityLoaded = true
      })
  }

}
