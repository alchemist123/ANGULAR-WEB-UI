import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appInitialState } from 'ng-surveys/lib/store/ng-survey.state';
import APIStandars from 'src/app/APIStandards';
import LessonStandards from 'src/app/LessonStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
declare var Chart: any;
@Component({
  selector: 'app-activity-report-overview',
  templateUrl: './activity-report-overview.component.html',
  styleUrls: ['./activity-report-overview.component.css']
})
export class ActivityReportOverviewComponent implements OnInit {
  lessonId: any;
  type: any;
  questions:any;
  answers:any;
  lessonStandards = LessonStandards
  avgCrt = 0;
  avgWrong = 0;
  avgPending = 0
  recomendationMessage = "";
  standardId = ""
  divisionId = ""
  overview: any = {}
  user: any;

  constructor(private communicationsService:CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    
      this.lessonId = localStorage.getItem("lessonId");
      this.standardId = localStorage.getItem("standardId")
      this.divisionId = localStorage.getItem("divisionId")
      console.log( this.lessonId, this.standardId, this.divisionId);
      this.getStudentReports()
  
  }

  getStudentReports(){
    this.communicationsService.executePOSTAPI(APIStandars.principal.getStudentReports,{lessonId:this.lessonId, lessonType:"19", standardId:this.standardId, divisionId:this.divisionId}).subscribe(
      (data)=>{
        console.log(data);
        
       this.overview=data
       this.answers = data["data"]
        console.log(this.overview);
        console.log(this.answers);
        
        this.computeGraphData()
      }
    )
  }

  computeGraphData(){
    this.answers.forEach((ele)=>{
      this.avgCrt = this.avgCrt + ele.correct
      this.avgWrong = this.avgWrong + ele.worong  
      this.avgPending = this.avgPending + ele.ans_for_review
    })
    this.avgCrt = this.avgCrt / this.answers.length
    this.avgWrong = this.avgWrong / this.answers.length
    this.avgPending = this.avgPending / this.answers.length
    if(this.avgPending>0){
      this.recomendationMessage = "Some answers are pending with you to review. Please review the answers first."
    }
    else if(this.avgWrong<this.avgCrt){
      this.recomendationMessage = "The average incorrect answers given by the students are greater than the average correct answers." 
      + " This means students have lack of previous knowledge. Hence we recommend you to revise the pre knowledge required for this lesson before beggining the lesson."
    }
   else{
        this.recomendationMessage = "Everything looks good. You can start teaching this lesson."
   }
    this.generatePieChart()
}



generatePieChart(){
var ctx = document.getElementById('pieChart');
var that =this
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ['Average wrong answers', 'Average correct answers', 'Average answers for review'],
      datasets: [{
          label: '# of Answers',
          data: [that.avgWrong, that.avgCrt, that.avgPending ],
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

}
