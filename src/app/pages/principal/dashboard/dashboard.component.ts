import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import SectionMasterData from "src/app/SectionStandards" 
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import  timeGreetings  from "time-greetings";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  schoolCountData: any  = {};
  sections:any = []
  sectionsMaterData = SectionMasterData;
  greetingMsg: any;
  activeUser: any;
  principalInfo: any;
  secondary: any;
  Foundational: any;
  Preparatory: any;
  Middle: any;
  FoundationalDAta: any;
  preparatoryData: any;
  MiddleData: any;
  secondaryData: any;
  studentSecondary: any;
  middleStudents: any;
  PreparatoryStudents: any;
  foundationalStudents: any;
  constructor(private comService: CommunicationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.FoundationalDAta = localStorage.getItem("foundational")
    this.Foundational = JSON.parse(this.FoundationalDAta)

    this.preparatoryData = localStorage.getItem("Preparatory")
    this.Preparatory = JSON.parse(this.preparatoryData)

    this.MiddleData = localStorage.getItem("Middle")
    this.Middle = JSON.parse(this.MiddleData)

    this.secondaryData = localStorage.getItem("secondary")
    this.secondary = JSON.parse(this.secondaryData)


    console.log("data",this.Foundational);
    const date = new Date();
    this.greetingMsg = (timeGreetings.timeGreetings(date));
    this.getSchoolCount()
    this.getSections()
    this.getUserDetails()
    this.bestTeacherSecondaryReport()
    this.bestTeacherMiddleReport()
    this.bestTeacherPreparatoryReport()
    this.bestTeacherFoundationalReport()
    this.monthlyBestStudentSecondary()
    this.monthlyBestStudentMiddle()
    this.monthlyBestStudentPreparatory()
    this.monthlyBestStudentFoundational()
  }
  ngOnChange(){
    this.FoundationalDAta = localStorage.getItem("foundational")
    this.Foundational = JSON.parse(this.FoundationalDAta)
  }
  bestTeacherSecondaryReport(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestTeacher,{type:"3"}).subscribe(
      (data)=>{
        console.log(data);
        this.secondary = data
        localStorage.setItem("secondary", JSON.stringify(data))
      }
    )
  }

  bestTeacherMiddleReport(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestTeacher,{type:"2"}).subscribe(
      (data)=>{
        console.log(data);
        this.Middle = data
        localStorage.setItem("Middle", JSON.stringify(data))
      }
    )
  }

  bestTeacherPreparatoryReport(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestTeacher,{type:"1"}).subscribe(
      (data)=>{
        console.log(data);
        this.Preparatory = data
        localStorage.setItem("Preparatory", JSON.stringify(data))
      }
    )
  }

  bestTeacherFoundationalReport(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestTeacher,{type:"0"}).subscribe(
      (data)=>{
        console.log(data);
        this.Foundational = data
        localStorage.setItem("foundational", JSON.stringify(data))
        console.log("data",this.Foundational);
        
      }
    )
  }

  monthlyBestStudentSecondary(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestStudent,{type:"3"}).subscribe(
      (data)=>{
        console.log(data);
        this.studentSecondary = data
      }
    )
  }

  monthlyBestStudentMiddle(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestStudent,{type:"2"}).subscribe(
      (data)=>{
        console.log(data);
        this.middleStudents = data
      }
    )
  }

  monthlyBestStudentPreparatory(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestStudent,{type:"1"}).subscribe(
      (data)=>{
        console.log(data);
        this.PreparatoryStudents = data
      }
    )
  }

  monthlyBestStudentFoundational(){
    this.comService.executePOSTAPI(APIStandars.principal.monthlyBestStudent,{type:"0"}).subscribe(
      (data)=>{
        console.log(data);
        this.foundationalStudents = data
      }
    )
  }

  getSchoolCount(){
    this.comService.executePOSTAPI(APIStandars.principal.getCountAboutSchool,{}).subscribe((data)=>{
        this.schoolCountData = data;
    })
  }

  getSections(){
    this.comService.executePOSTAPI(APIStandars.principal.getSectionLists,{}).subscribe((data:any)=>{
        this.sections = data['subjectTechers'];
        console.log(data);
        
    })
  }
  selectStudent(){
    
  }

  getUserDetails(){
    this.comService.executePOSTAPI(APIStandars.getUserDetails,{userType:this.authService.activeUser.userType}).subscribe((data)=>{
      this.principalInfo=data;
      console.log("da",this.principalInfo);
      
    })
  }



}
