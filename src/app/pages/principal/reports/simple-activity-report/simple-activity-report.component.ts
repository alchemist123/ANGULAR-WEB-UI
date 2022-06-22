import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import LessonStandards from 'src/app/LessonStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
declare var Chart: any;
@Component({
  selector: 'app-simple-activity-report',
  templateUrl: './simple-activity-report.component.html',
  styleUrls: ['./simple-activity-report.component.css']
})
export class SimpleActivityReportComponent implements OnInit {
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
  overview: any;

  constructor(private communicationsService:CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params)=>{
      this.lessonId = localStorage.getItem("lessonsId");
      this.type = params.type;
      this.standardId = localStorage.getItem("standardId")
      this.divisionId = localStorage.getItem("divisionId")
      console.log( this.lessonId, this.type, this.standardId, this.divisionId);
      this.getStudentReports()
    })
  }

  getStudentReports(){
    this.communicationsService.executePOSTAPI(APIStandars.principal.getStudentReports,{lessonId:this.lessonId, lessonType:"14", standardId:this.standardId, divisionId:this.divisionId}).subscribe(
      (data)=>{
        this.answers=data["data"]
        this.overview=data
        console.log(this.answers);
        
      }
    )
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
