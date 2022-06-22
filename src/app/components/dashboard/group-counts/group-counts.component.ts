import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-group-counts',
  templateUrl: './group-counts.component.html',
  styleUrls: ['./group-counts.component.css']
})
export class GroupCountsComponent implements OnInit {

  preAssesmentData: any;
  postAssesmentData:any;
  underStandingData: any;
  preAssesmentIntegratedData:any = [];
  postAssementIntegratedData: any = [];
  understandingIntegratedData: any = [];
  activityAssessmentData: any = [];
  activityIntegratedData: any = [];
  studentsCounts = []

  view: any[] = [700, 400];
  colorScheme = {
    domain: ['#00e676','#FF0266', '#ffeb3b', '#C7B42C', '#AAAAAA']
  };
  show= false
  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {

    setTimeout(() =>{
      this.comService.emit("top_level_pre_report")
      this.comService.emit("top_level_post_report")
      this.comService.emit("top_level_self_report")
      console.info("emited all the services")
      this.comService.listen("pre_listener").subscribe((data)=>{
        console.log({preAssesmentData:data})
        this.getPreAssementData(data)
      })
      this.comService.listen("post_listener").subscribe((data)=>{
        console.log({getPostAssementData:data});
        
        this.getPostAssementData(data)
      })
      this.comService.listen("self_listener").subscribe((data)=>{
        this.getUnderstandingData(data)
      })
      this.comService.listen("activity_prevData_listener").subscribe(data=>{
        console.log(data);
        this.getIntegratedActivityData(data["preData"])
      })
    },3000)
   
  
    
  }


  ngOnChanges(){
    setTimeout(() =>{
      this.comService.emit("top_level_pre_report")
      this.comService.emit("top_level_post_report")
      this.comService.emit("top_level_self_report")
      this.comService.listen("pre_listener").subscribe((data)=>{
        console.log({preAssesmentData:data})
        this.getPreAssementData(data)
      })
      this.comService.listen("post_listener").subscribe((data)=>{
        this.getPostAssementData(data)
      })
      this.comService.listen("self_listener").subscribe((data)=>{
        this.getUnderstandingData(data)
      })
    },3000)
  }

  getPreAssementData(data){
   
      var preAssesmentSum = this.sumObjectsByKey(...data)
      this.preAssesmentIntegratedData = [{"name": "Correct answers", "value":preAssesmentSum.attend},
                                         {"name": "Wrong answers", "value":preAssesmentSum.worong}

                                        ]
                                        
                                        this.show = true


  }

  getPostAssementData(data){
      var postSum = this.sumObjectsByKey(...data)
      this.postAssementIntegratedData = [{"name": "Correct answers", "value":postSum.attend},
                                         {"name": "Wrong answers", "value":postSum.worong}

                                        ]
                                        console.log("integrated Post", this.preAssesmentIntegratedData)
                              
                                        this.show = true
  }

  getUnderstandingData(data){
      var underSum = this.sumObjectsByKey(...data)
      this.understandingIntegratedData = [{"name": "Correct Answers", "value":underSum.correct},
                                         {"name": "Corrected Answers", "value":underSum.corrected},
                                         {"name": "Pending Self Review", "value":underSum.ans_for_review}
                                        ]                              
                                        this.show = true

  }

  getIntegratedActivityData(data){
    var activitySum = this.sumObjectsByKey(...data)
    this.activityIntegratedData = [{"name" : "Total Activity", "value" : activitySum.total_activity},
                                   {"name" : "Completed Activity", "value" : activitySum.total_completions}
                                  ]
                                  this.show = true
}

  sumObjectsByKey(...objs) {
    return objs.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k) && !isNaN(b[k])) 
          a[k] = (parseInt(a[k]) || 0) + parseInt(b[k]);
      }
      return a;
    }, {});
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



  getGroupData(){

  }

}
