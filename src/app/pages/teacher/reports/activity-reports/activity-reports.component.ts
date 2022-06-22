import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import LessonStandards from 'src/app/LessonStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
declare var Chart: any;
@Component({
  selector: 'app-activity-reports',
  templateUrl: './activity-reports.component.html',
  styleUrls: ['./activity-reports.component.css']
})
export class ActivityReportsComponent implements OnInit {

  lessonId: any;
  type: any;
  questions:any;
  answers = [];
  lessonStandards = LessonStandards
  avgCompleted = 0;
  avgPending = 0
  recomendationMessage = "";
  standardId = ""
  divisionId = ""
  typeValue: any;

  constructor(private communicationsService:CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRouter.params.subscribe((params)=>{
        console.log(params);
        this.typeValue = params["type"]
        this.lessonId = params["lessonid"];
        console.log("idd",this.typeValue);
        localStorage.setItem("activityLessonId",this.lessonId)
        this.standardId = localStorage.getItem("standardId")
        this.divisionId = localStorage.getItem("divisionId")
        this.getOverViewReports()
      })
  }

  getOverViewReports(){
    if(this.typeValue == '17'){
      this.communicationsService.executePOSTAPI(APIStandars.getOverviewMarksReportForTeacher,{lessonId:this.lessonId, lessonType:"17", standardId: this.standardId, divisionId: this.divisionId }).subscribe((data:any) => {
        this.answers = data["data"]
        this.computeGraphData()
    })
    }
    else{
      this.communicationsService.executePOSTAPI(APIStandars.getOverviewMarksReportForTeacher,{lessonId:this.lessonId, lessonType:"14", standardId: this.standardId, divisionId: this.divisionId }).subscribe((data:any) => {
        this.answers = data["data"]
        this.computeGraphData()
    })
    }
  }
  computeGraphData(){
      this.answers.forEach((ele)=>{
        if(ele.completionsStatus=="Completed"){
          this.avgCompleted = this.avgCompleted + 1
        }
        else{
          this.avgPending = this.avgPending + 1
        }
        
      })
     
      this.generatePieChart()
  }



generatePieChart(){
  var ctx = document.getElementById('pieChart');
  var that =this
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Number of students completed the activity', 'Number of student not completed the activity'],
        datasets: [{
            label: '#',
            data: [that.avgCompleted, that.avgPending],
            backgroundColor: [
                '#ec4561',
                '#02a499',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        
    }
});
}

setActivityData(item){
  localStorage.setItem("activityDetails", JSON.stringify(item));
}

}