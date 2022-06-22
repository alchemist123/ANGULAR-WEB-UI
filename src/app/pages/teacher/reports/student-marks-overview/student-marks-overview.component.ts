import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import LessonStandards from 'src/app/LessonStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { StudentNotAttendedModalComponent } from '../student-not-attended-modal/student-not-attended-modal.component';

declare var Chart: any;
@Component({
  selector: 'app-student-marks-overview',
  templateUrl: './student-marks-overview.component.html',
  styleUrls: ['./student-marks-overview.component.css']
})

export class StudentMarksOverviewComponent implements OnInit {
  
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
  studentlistNot: any;

  
  constructor(private communicationsService:CommunicationService, private activatedRouter: ActivatedRoute, private dialog:MatDialog) { }

  ngOnInit(): void {
      this.activatedRouter.params.subscribe((params)=>{
        this.lessonId = params.lessonId;
        this.type = params.type;
        this.standardId = localStorage.getItem("standardId")
        this.divisionId = localStorage.getItem("divisionId")
        this.user = localStorage.getItem("userType")
        console.log( this.lessonId, this.type, this.standardId, this.divisionId);

        this.getOverViewReports()
      })
      
  }

  studentModal(){
    var dialogRef = this.dialog.open(StudentNotAttendedModalComponent,{
      data:{lessonId:this.lessonId,
            standardId: this.standardId,
            divisionId: this.divisionId,
            user: this.user,
            type: this.type}
    })
    
  }

  getOverViewReports(){
    
    this.communicationsService.executePOSTAPI(APIStandars.getOverviewMarksReportForTeacher,{lessonId:this.lessonId, lessonType:this.type, standardId: this.standardId, divisionId: this.divisionId }).subscribe((data:any) => {
        this.answers = data["data"]
        this.overview = data
        this.studentlistNot = data["notYet"]
        console.log(this.studentlistNot);
        this.computeGraphData()
    })
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