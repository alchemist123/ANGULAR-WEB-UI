import { Component, OnInit } from '@angular/core';
import { appInitialState } from 'ng-surveys/lib/store/ng-survey.state';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import  timeGreetings  from "time-greetings";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  preAssesmentData: any;
  postAssesmentData:any;
  underStandingData: any;
  preAssesmentIntegratedData:any = [];
  postAssementIntegratedData: any = [];
  understandingIntegratedData: any = [];
  activityAssessmentData: any = [];
  activityIntegratedData: any = [];
  studentsCounts = []
  teachingComplition:any
  lessonscore:any
  lessonCompletion:any
  studentCompletion:any
  teachingpercentage:any
  lessonPercentage:any
  microLessonPecentage:any
  studentCompletionPercentage:any
  teacherProgress:any = {}

  view: any[] = [700, 400];
  colorScheme = {
    domain: ['#78C000','#ec4561', '#ffeb3b', '#C7B42C', '#AAAAAA' ]
  };
  show= false
  percentageData: any;
  percentage: any = [];
  activeUser: any = {};
  greetingMsg: any = ""
  completion: any 
  teacherInfo:any
  currentId: any;
  quotes: any;
  author: any;
  constructor(private comService: CommunicationService, private authService: AuthService) {
    this.currentId=localStorage.getItem("currentId")
    console.log(this.currentId);
   }

  ngOnInit(): void {
    
  
    
    this.activeUser = this.authService.activeUserDetails
    
    const date = new Date();
    this.greetingMsg = (timeGreetings.timeGreetings(date));

    setTimeout(()=>{
    this.comService.reportDataInitForTeacher()
    },3000)

  
    this.comService.listen("pre_prevData_listener").subscribe(data => {
      console.log({"Prev":data});
      if(data["prevData"])
      this.getPreAssementData(data["prevData"])
    })

    this.comService.listen("post_prevData_listener").subscribe(data => {
      console.log({"Post":data});
      if(data["prevData"])
      this.getPostAssementData(data["prevData"])
    })

    this.comService.listen("self_prevData_listener").subscribe(data => {
      console.log({"Self":data});
      if(data["prevData"])
      this.getUnderstandingData(data["prevData"])
    })

    this.comService.listen("activity_prevData_listener").subscribe(data=>{
      console.log({activityData:data});
      if(data["prevData"])
      this.getIntegratedActivityData(data["prevData"])
    })


    // this.comService.listen("student_on_time_listener", {id:this.currentId}).subscribe(data=>{
    //   console.log({"studentsontime":data});
      
    // })

    // this.comService.listen("lesson_score_listener",{id:this.currentId}).subscribe(data=>{
    //   console.log({data});
      
    // })
   
    // this.comService.listen("lesson_prepration_listener").subscribe(data=>{
    //   console.log({data});
      
    // })
  

    
    
    
    //this.getUnderstandingData()
    this.getStudentCounts()
  
    this.teachingCompletion()
    this.getLessonScore()
    this.microLessonCompletion()
    this.studentCompletionOnTime()
    this.findMyProgress()
    this.getTeacherDetails()
    this.getQuotes()
  }


  ngAfterViewInit(){
    setTimeout(() => {
      this.activeUser = this.authService.activeUserDetails
      console.log("Teacher Data", this.authService.activeUserDetails)
    },3000)

  }

  teachingCompletion(){
    this.comService.executePOSTAPI(APIStandars.teachingCompletion,{}).subscribe(
      (data)=>{
        this.teachingComplition=data
        let percentage=data["percentage"]
        this.teachingpercentage=Math.round(percentage*100)/100
      }
    )
  }

  getLessonScore(){
    this.comService.executePOSTAPI(APIStandars.getLessonScore,{}).subscribe(
      (data)=>{
        this.lessonscore=data
        let percentage=data["percentage"]
        this.lessonPercentage = Math.round(percentage*100)/100
        console.log(this.lessonscore);
        
      }
    )
  }

  microLessonCompletion(){
    this.comService.executePOSTAPI(APIStandars.microLessonCompletion,{}).subscribe(
      (data)=>{
        this.lessonCompletion=data
        let percentage=data["percentage"]
        this.microLessonPecentage = Math.round(percentage*100)/100 
        console.log(this.lessonCompletion);
        
      }
    )
  }

  studentCompletionOnTime(){
    this.comService.executePOSTAPI(APIStandars.studentCompletionOnTime,{}).subscribe(
      (data)=>{
        this.studentCompletion=data
        let percentage=data["percentage"]
        this.studentCompletionPercentage = Math.round(percentage*100)/100
         console.log(this.studentCompletion); 
      }
    )
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



  getStudentCounts(){
    this.comService.executePOSTAPI(APIStandars.getStudentsCountForTeacherAPI,{}).subscribe((data:any)=>{
      this.studentsCounts = data
    })
  }

  findMyProgress(){

    this.comService.executePOSTAPI(APIStandars.findMyProgress,{}).subscribe(
      (data:any)=>{
        
        data.forEach((ele)=>{
              var key = ele.standard + "." + ele.division
              if(this.teacherProgress[key]){
                this.teacherProgress[key].push(ele)
              }
              else{
                this.teacherProgress[key] = [ele]
              }
        });
        //this.teacherProgress=data
        this.completion=data.map(item=>item.completion)
        }
        
      
    )
  }

  getTeacherDetails(){
    this.comService.executePOSTAPI(APIStandars.getTeacherDetails,{}).subscribe(
      (data)=>{
        this.teacherInfo = data
        console.log("user",data);
        
      }
    )
  }

  getQuotes(){
    this.comService.executePOSTAPI(APIStandars.getQuotes,{}).subscribe(
      (data)=>{
        console.log(data);
        this.quotes = data["quote"]
        this.author = data["authoer"]
        console.log( this.quotes);
        
      }
    )
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

  formatToolTip(){

  }


}
