import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
declare var Chart: any;
@Component({
  selector: 'app-self-assessment-report',
  templateUrl: './self-assessment-report.component.html',
  styleUrls: ['./self-assessment-report.component.css'],
})
export class SelfAssessmentReportComponent implements OnInit {
  private lessonId: string;
  summary: any = [];
  recomendationMessage = '';
  avgCrt = 0;
  avgCorrected = 0;
  avgPending = 0;
  standardId = '';
  overview: any = {};
  divisionId = '';
  answers: any;
  type: any;

  constructor(
    private communicationsService: CommunicationService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.lessonId = localStorage.getItem('lessonsId');
      this.type = params.type;
      this.standardId = localStorage.getItem('standardId');
      this.divisionId = localStorage.getItem('divisionId');
      console.log(this.lessonId, this.type, this.standardId, this.divisionId);
      this.getStudentReports();
    });
  }

  getStudentReports() {
    this.communicationsService
      .executePOSTAPI(APIStandars.principal.getStudentReports, {
        lessonId: this.lessonId,
        lessonType: '18',
        standardId: this.standardId,
        divisionId: this.divisionId,
      })
      .subscribe((data) => {
        this.overview = data;
        this.summary = data['data'];
        console.log(this.overview);
        console.log(this.summary);
        this.computeGraphData();
      });
  }

  computeGraphData() {
    this.summary.forEach((data) => {
      this.avgCrt = this.avgCrt + data.correct;
      this.avgCorrected = this.avgCorrected + data.corrected;
      this.avgPending = this.avgPending + data.ans_for_review;
    });
    this.avgCrt = this.avgCrt / this.summary.length;
    this.avgCorrected = this.avgCorrected / this.summary.length;
    this.avgPending = this.avgPending / this.summary.length;
    this.generatePieChart();
  }

  generatePieChart() {
    var ctx = document.getElementById('pieChart');
    var that = this;
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Average corrected answers',
          'Average correct answers',
          'Average answers pending for self assesment',
        ],
        datasets: [
          {
            label: '# of Answers',
            data: [that.avgCorrected, that.avgCrt, that.avgPending],
            backgroundColor: [
              '#ec4561',
              '#02a499',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
}
