import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import APIStandars from 'src/app/APIStandards';
import LessonStandards from 'src/app/LessonStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  @Input() lessonId: any;
  @Input() counter:any;
  @Input() chapterId:any
  @Output() onLessonSelected:EventEmitter<string> = new EventEmitter<string>();
  @Output() onReportSelected:EventEmitter<string> = new EventEmitter<string>();
  @Output() onPreviewSelected:EventEmitter<string> = new EventEmitter<string>();
 
  panelOpenState = false;
  lessons = []
  newLists = {}
  lessonTypes = LessonStandards
  completedMicroUnits = []
  activeUser:any;
  isComplex: any;
  lessonData: any;
  nanoUnit: any = [];
  previousYearStatus: any;
  nano: any;
  constructor(private communicationsService:CommunicationService, private notifications: NotificationsService, private authService: AuthService, private router: Router) {

    this.activeUser =this.authService.activeUser
    console.log(this.lessonId);
    
   }

  ngOnInit(): void {
   
    this.previousYearStatus = localStorage.getItem("previousData")
 
    this.getUnitDetails()
    this.getCompletedUnits()
    this.listMicroAndNano()
  }

  ngOnChanges(): void {
    this.getUnitDetails()
    this.getCompletedUnits()
    this.listMicroAndNano()
  }

  getUnitDetails(){
    if(this.activeUser.userType=="student"){
      this.communicationsService.executePOSTAPI(APIStandars.getChildLessonsForStudentAPI,{parentLessonId:this.lessonId}).subscribe(
        (data:any) => {
          this.lessons = data[0].children;
          this.lessons.forEach((data)=>{
            if(data.complex){
                this.isComplex = true;
            }
          })
        //setTimeout(()=>{$('.collapse').collapse()},500)
        //console.log("data", this.getSortedLessons(this.lessons))
        }
        )
      }
      else  if(this.activeUser.userType=="teacher"){
        console.log("active user", this.activeUser.userType)
        this.communicationsService.executePOSTAPI(APIStandars.listLessonsForTeachers,{parentLessonId:this.lessonId}).subscribe(
          (data:any) => {
            console.log("data",data);
            
            this.lessons = data.lessons;
            this.lessons.forEach((data)=>{
              if(data.type=="1"){
                  this.isComplex = true;
                  console.log("data",this.isComplex);
              }
            })
            //setTimeout(()=>{$('.collapse').collapse()},500)
            //console.log("data", this.getSortedLessons(this.lessons))
          }
          )
      }
      else{
        this.communicationsService.executePOSTAPI(APIStandars.principal.getLessons,{parentLessonId:this.lessonId}).subscribe(
          (data:any) => {
            this.lessons = data.lessons;
            this.lessons.forEach((data)=>{
              if(data.complex){
                  this.isComplex = true;
              }
            })
            //setTimeout(()=>{$('.collapse').collapse()},500)
            //console.log("data", this.getSortedLessons(this.lessons))
          }
          )
      }
  }

  getStudentReports(){
    this.communicationsService.executePOSTAPI(APIStandars.principal.getStudentReports,{})
  }

  onTopicSelection(){
    var lessonDetails: any = {_id:this.lessonId}
    this.onLessonSelected.emit(lessonDetails);
    console.log(lessonDetails);
  }

  onTopicSelections(id){
    var lessonDetails: any = {_id:id}
    this.onLessonSelected.emit(lessonDetails);
    console.log(lessonDetails);
    
  }

  onUnitSelection(lesson, idx, sortedList){
    console.log(lesson);
    
if(this.activeUser.userType == "teacher" || this.activeUser.userType == "staff" || this.previousYearStatus == 'false'  ){

if(lesson.nano.length == 0){ 
    this.onLessonSelected.emit(lesson);
}
  
 
}

else{
    console.log("onUnitSelection", idx)
  if(idx==0){
    this.onLessonSelected.emit(lesson);
  }
  if(this.completedMicroUnits.includes(idx)){
    console.log("Complted")
    this.onLessonSelected.emit(lesson);
  }
 else if((idx==0) || (!this.completedMicroUnits.includes(idx) && idx>0 && this.completedMicroUnits.includes(sortedList[idx-1]._id))){
    this.onLessonSelected.emit(lesson);
 }
    else{
        this.notifications.showDanger("Access denied", "Please complete the previous microunit to view this microunit.")
    }
}
  }
  getCompletedUnits(){
    this.communicationsService.executePOSTAPI(APIStandars.checkMicroUnitCompletedForStudent,{lessonId:this.lessonId}).subscribe((data:any)=>{
     this.completedMicroUnits = data
    })
  }
  loadPostAssement(sortedList){
    this.router.navigate(["/student/getAssesmentQuestions/"+this.lessonId + "/20"])
      // if(!this.completedMicroUnits.includes(sortedList[sortedList.length-1]._id) && this.isComplex){
      //   this.notifications.showDanger("Access denied", "Please complete the previous microunits to attend the post assesmemt.")
      // }
      // else{
      //   this.router.navigate(["/student/getAssesmentQuestions/"+this.lessonId + "/20"])
      // }
  }
  loadReport(type){
    this.onReportSelected.emit(type)
  }
  loadQuestionsPreview(type){
      this.onPreviewSelected.emit(type)
  }



  listMicroAndNano(){
    if(this.activeUser.userType=="student"){
      this.communicationsService.executePOSTAPI(APIStandars.listMicroAndNanounit,{lessonId:this.lessonId}).subscribe(
        (data)=>{
          console.log(data);
          this.lessonData = data
          console.log(this.lessonData);
          //this.nanoUnit = data["nano"]
          console.log(this.nanoUnit);
          
        }
      )
    }
    else if(this.activeUser.userType=="teacher"){
      this.communicationsService.executePOSTAPI(APIStandars.listMicroAndNano,{lessonId:this.lessonId}).subscribe(
        (data:any)=>{
          console.log(data);
          this.lessonData = data
          this.nano = data.nano
          //this.nanoUnit.push(data)
          console.log(this.nano);
        }
      )
    }
    else{
      this.communicationsService.executePOSTAPI(APIStandars.principal.listMicroAndNanoPrincipal,{lessonId:this.lessonId}).subscribe(
        (data)=>{
          console.log(data);
          this.lessonData = data
          console.log(this.lessonData);
          //this.nanoUnit = data["nano"]
          console.log(this.nanoUnit);
          
        }
      )
    }
  }
}
