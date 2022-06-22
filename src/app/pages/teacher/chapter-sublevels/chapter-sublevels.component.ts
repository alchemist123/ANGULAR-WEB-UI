import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { KeyValue, Location } from '@angular/common'
import {MatDialog} from '@angular/material/dialog';
import { ShareChapterComponent } from '../components/share-chapter/share-chapter.component';
import { ChapterAddModalComponent } from '../chapter-add-modal/chapter-add-modal.component';
import { ChapterMicrounitCountModalComponent } from '../chapter-microunit-count-modal/chapter-microunit-count-modal.component';
import { ChapterSublevelPresentModalComponent } from '../chapter-sublevel-present-modal/chapter-sublevel-present-modal.component';
import LessonStandards from 'src/app/LessonStandards';
import ContentStandards from 'src/app/ContentStandards';

declare var $: any;
@Component({
  selector: 'app-chapter-sublevels',
  templateUrl: './chapter-sublevels.component.html',
  styleUrls: ['./chapter-sublevels.component.css']
})
export class ChapterSublevelsComponent implements OnInit {

  totalLessonStatus:any
  parentType: any;
  parentId: any;
  currentType: any;
  parentLessonDetails: any;
  currentSubType: any;
  currentLessonDetails: any;
  chapterId:any;
  activityStatus:any=[]
  lessons = {}
  routeMap: any;
  parentLessonName = ""
  displayOrder = ["19","7", "23","6","20"]
  supportContents = {
    "19":[],
    "5":[],
    "7":[],
    "3": [],
    "6":[],
    "18":[],
    "20": [],
    "23": [],
   
  }
  subLessons = []

  lessonStatus = false;
  

  unitLabel = ""
  public typeLabels = {
    "0" : "chapter",
    "1" : "micro unit",
    "2" : "nano unit",
    "3" : "activity",
    "4" : "chapter information",
    "5": "learning objective",
    "6": "learning outcome",
    "7": "topic",
    "8": "basics",
    "9": "theory",
    "10": "information",
    "11": "fact",
    "12": "description",
    "13": "other",
    "14": "simple activity",
    "15" : "experiential activity",
    "16": "multidisciplinary activity",
    "17": "scientific activity",
    "18": "understanding question",
    "19": "pre assessment question",
    "20": "post assessment question",
    "21": "knowledge measurements",
    "22": "activities",
    "23": "concept"
  }

  parentChildMapping = {
    "0" : "0",
    "1" : "1",
    "2" : "2",
    "3" : "3",
    "4" : "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "7",
    "9": "7",
    "10": "7",
    "11": "7",
    "12": "7",
    "13": "7",
    "14": "3",
    "15" : "3",
    "16": "3",
    "17": "3",
    "18": "18",
    "19": "19",
    "20": "20",
    "23": "23"

  }

  parentTypeLabels = {
    "0" : "chapter",
    "1" : "micro units",
    "2" : "nano units",
    "4" : "informations" ,
   
    "6":  "learning outcomes",
    "7": "topics",
    "8": "topics",
    "9": "topics",
    "10": "topics",
    "11": "topics",
    "12": "topics",
    "13": "topics",
    "14": "activities",
    "15" :"activities",
    "16": "activities",
    "17": "activities",
   
    "19": "pre assessment questions",
    "20": "post assessment questions",
    "21": "knowledge measurements",
    
    "23":"Key Concepts"
  } 
  lessonId: string;
  lessonAdded: any;
  idd: any;
  status: any;
  percentage: any;
  assignTeacherId: any;
  assignLessonId: any;
  teacherId: any;
  refId: any;
  concept:any
  mediaType = ""
  typeText: any;
  conceptId: any;
  complex: any;
  topics: any;
  parentLessonId: any;
  unitId: any;
  type: any;


  constructor(private location: Location, private comService: CommunicationService, private notifications: NotificationsService, private activatedRouter: ActivatedRoute, private router: Router, private matDialog: MatDialog) { }

  resetData() {
    this.lessons = []
    this.supportContents = {
      "19":[],
      "5":[],
      "7":[],
      "3": [],
      "6":[],
      "18":[],
      "20": [],
      "23": []
    }
  }

  resetLessonData(){
    for (var key in this.parentChildMapping) {
      if (Object.prototype.hasOwnProperty.call(this.parentChildMapping, key)) {
          this.lessons[this.parentChildMapping[key.toString()]] = []
      }
  }
  }

  ngOnInit(): void {
    
    this.activatedRouter.params.subscribe(
      (data)=>{
      this.resetData()
      this.resetLessonData()
      this.parentId = data["id"]
      this.chapterId=data["id"]
      this.unitId = data["unitId"]
      this.parentLessonId=data["parentLessonId"]
      this.type = data["type"]
      console.log("da",this.parentLessonId);
      console.log("id",this.chapterId);
      
      this.comService.executePOSTAPI(APIStandars.getLessonForTeachers,{parentLessonId:this.parentId}).subscribe(
          (data)=>{
            console.log(data);
            
            this.currentLessonDetails = data;
            this.lessonStatus = data["status"]
            this.complex = data["complex"]
            console.log(this.lessonStatus);
            
            this.parentType = data["type"]
            if(this.parentType=="1"){
              this.currentType = "2"
              this.unitLabel = "Micro unit"
            }
            if(this.parentType=="2"){
              this.currentType = "3"
              this.unitLabel = "Nano unit"
            }
            if(this.parentType=="0"){
              this.currentType = "1"
              this.unitLabel = "Chapter"
            }
            console.log("Current typ eis", this.parentType)
            this.getSublevels()
            this.getStatus()
            this.getParentInfo()
            this.getSupportingContents();
            this.listConcept()
            this.listPreviewTopics()
          },(err)=>{
            this.notifications.showDanger("Failed", "Failed to fetch data. Please try again")
          }
          )
      }
    )
    this.assignLessonId = localStorage.getItem("mappingId")
    console.log("datas",this.assignLessonId);
    
   this.totalLessonAdded()
   this.getLessonPreprationScore() 
   this.teacherId = localStorage.getItem("mappingId")
  }

  ngOnChange(){
    this.totalLessonAdded()
  }

  getSublevels(){
   
      this.comService.executePOSTAPI(APIStandars.listLessonsForTeachers,{parentLessonId:this.parentId}).subscribe(
        (data:any)=>{
          console.log(data);
          this.resetLessonData()
          var cobinedData = data.lessons;
          cobinedData.push(...data.mapChapter)
          this.subLessons = cobinedData
          cobinedData.forEach(element => {
            if(element.type.toString()=="1" || element.type.toString()=="2")
            this.lessons[this.parentChildMapping[element.type.toString()]].push(element) 
          });
        },(err)=>{
          this.notifications.showDanger("Failed", "Failed to retrive lesson data. Please try again." )
        }
      )
  }

  getStatus(){
    this.comService.executePOSTAPI(APIStandars.microActivityStatus, {lessonId:this.chapterId}).subscribe((data)=>{
      this.activityStatus=data
      })
    }

  getActivity(_id){
   return this.activityStatus.includes(_id)
  }

  selectSubLevel(type, id){
    console.log(type)
    if(type.toString()=="1"||type.toString()=="2"){
      console.log("navigating")
      console.log(this.parentId)
      this.router.navigate(["/teacher/sublevels/"+id])
    }
  }

  selectUnit(id, type, isRef=false){
      console.log("refid",id);
      
    if(isRef){
      localStorage.setItem("refId", id)
      console.log({id, type})
    }
    else{
      localStorage.removeItem("refId")
    }
      
      switch (type){
        case '1': {
          this.router.navigate(["/teacher/google-slide-create/"+this.parentId+"/"+type+"/"+id])
          break;
        }
        case '3': {
          this.router.navigate(["/teacher/rich-text-editor/"+this.parentId+"/"+type+"/"+id])
          break
        }
        case '2': {
          this.router.navigate(["/teacher/pdf-file-uploader/"+this.parentId+"/"+type+"/"+id])
          break
        }
        case '7': {
          this.router.navigate(["/teacher/q-and-a/"+this.parentId+"/"+type+"/"+id])
          break
        }
        case '9':{
          this.router.navigate(["/teacher/create-simple-activity/"+this.parentId+"/"+type+"/"+id])
          break
        }
        case '10':{
          this.router.navigate(["/teacher/manage-experiential-activity/"+this.parentId+"/"+type+"/"+id])
          break
        }
        case '0':{
          this.router.navigate(["/teacher/adobe-spark/"+this.parentId+"/"+type+"/"+id])
          break
        }
      }
  }

  deleteContent(){
    if(this.parentLessonId==undefined){
      this.notifications.showConfirm("Are you sure you want to delete this "+ this.typeLabels[this.parentType] + "?", "Delete", "cancel").then((res)=>{
        if(res){
           this.comService.executePOSTAPI(APIStandars.deleteLessonContentTeacherAPI,{lessonId:this.parentId, assignTeacherId:this.teacherId}).subscribe(
        (data) =>{
          this.notifications.showSuccess("Success","Chapter has been deleted successfully.")
          this.location.back()
        },(err)=>{
          this.notifications.showDanger("Failed","Failed to complete the operation.")
        }
        )
        }
        else{
  
        }
      })
    }
    else{
      this.notifications.showConfirm("Are you sure you want to delete this "+ this.typeLabels[this.parentType] + "?", "Delete", "cancel").then((res)=>{
        if(res){
           this.comService.executePOSTAPI(APIStandars.deleteChapter,{lessonId:this.parentId, assignTeacherId:this.teacherId, unitId:this.unitId}).subscribe(
        (data) =>{
          this.notifications.showSuccess("Success","Chapter has been deleted successfully.")
          this.location.back()
        },(err)=>{
          this.notifications.showDanger("Failed","Failed to complete the operation.")
        }
        )
        }
        else{
  
        }
      })
    }
    

   
  }

  selectId(id){
    this.refId = id
    localStorage.setItem("refId",  this.refId)
    
    console.log("id",this.refId);
    
  }
  add(){
    console.log("data");
    
  }

  addUnit(type=null,id, isRef=false){
 

      if(isRef){
        localStorage.setItem("refId", id)
      }
      else{
        localStorage.removeItem("refId")
      }
    
    if(type=="0" || type=="1" || type=="2"){
      $("#unitModal").modal('show')

    }
    else if(type=="14"){
      this.router.navigate(["/teacher/create-simple-activity/"+ this.parentId+"/"+type])
    }
    else if(type=="15"){
      this.router.navigate(["/teacher/manage-experiential-activity/"+ this.parentId+"/"+type])
    }
    else if(type=="18" || type=="19" || type=="20"){
    
      this.router.navigate(["/teacher/q-and-a/"+ this.parentId+"/"+type])
    
    }
    // else if(type="17"){
    //   this.router.navigate(["/teacher/digital-board/"+ this.parentId+"/"+type])
    // }
    else{
      this.router.navigate(["/teacher/digital-board/"+ this.parentId+"/"+type])
    }
  }

  selectConcpt(id){
    this.conceptId = id
    console.log("id",this.conceptId);
    
  }
  refreshList(){
    $("#unitModal").modal('hide')
    $("#lessonUpdate").modal('hide')
    this.getSublevels()
  }
  getParentInfo(){
    let unitType;
    if(this.parentType=="1")
    unitType = "microId"
    if(this.parentType=="2")
    unitType = "nanoId"
    if(this.parentType=="0")
    unitType = "chapterId"

    var dataToSend = {}
    dataToSend[unitType] = this.parentId

    console.log("data to send",this.parentType,dataToSend)

    this.comService.executePOSTAPI(APIStandars.getParentInfoTeacherAPI,{lessonId:this.parentId}).subscribe(
      (data: any) =>{
        
        data.push(this.currentLessonDetails)
        this.parentLessonName = data[data.length-1].lessonNumber + ". " + data[data.length-1].lessonName
        this.routeMap = data[0].standard[0].standards + " " + data[0].division[0].division+ " / " + data[0].subject[0].subject
        for(var i=1; i<data.length-1; i++){
          this.routeMap = this.routeMap + " / " + data[i].lessonName
        }
      }
      )
  }

  getSupportingContents(){
    this.resetData()
    this.comService.executePOSTAPI(APIStandars.getSupportContentsTeacherAPI,{parentLessonId:this.parentId}).subscribe(
      (data:any)=>{
        data.forEach((ele)=>{
        
          if(this.supportContents.hasOwnProperty(this.parentChildMapping[ele.type.toString()])){
  
          this.supportContents[this.parentChildMapping[ele.type.toString()]].push(ele)
          }
        })
      }
    )
  }

  listConcept(){
    this.comService.executePOSTAPI(APIStandars.listPreviewConcepts,{lessonId:this.parentId}).subscribe(
      (data)=>{
        console.log(data);
        this.concept = data
        this.typeText = LessonStandards[data["type"]]
        this.mediaType = ContentStandards[data["contents"][0]["contentType"]]
        console.log(this.typeText,this.mediaType);
        
      }
    )
  }

  listPreviewTopics(){
    this.comService.executePOSTAPI(APIStandars.listPreviewTopics,{lessonId:this.parentId}).subscribe(
      (data)=>{
        console.log(data);
        this.topics = data
      }
    )
  }

  updateLesson(){
    $("#lessonUpdate").modal('show')
    this.getSublevels()
  }
  
  publishStatus(status){
    this.comService.executePOSTAPI(APIStandars.publishLesson, {lessonId: this.parentId, status: status}).subscribe((data)=>{
      this.lessonStatus = status  
      if(status){
          
            this.notifications.showSuccess("Success","Chapter published sucessfully.")
        }
        else {
          this.notifications.showSuccess("Success","Chapter unpublished sucessfully")
        }
    },(err)=>{

    })
  }

  getLessonPreprationScore(){
    this.comService.executePOSTAPI(APIStandars.getLessonPreprationScore,{lessonId:this.parentId}).subscribe(
      (data)=>{
        console.log(data);
        this.status = data[0]["status"]
        this.percentage = data[0]["percentage"]
        console.log(this.status);
        
      }
    )
  }

  migrateLesson(){
    var ref = this.matDialog.open(ShareChapterComponent, {
      data: {
        chapterId: this.parentId,
        unitId:this.parentLessonId,
        type:this.type
      }
    })
  }
  //   this.comService.executePOSTAPI(APIStandars.migrateLesson, {chapterId: this.parentId, assignTeacherId: localStorage.getItem("mappingId")}).subscribe((data)=>{
  //     this.notifications.showSuccess("Success","Chapter migrated to all other divisions.")
  //   },
  //   (err)=>{
  //     this.notifications.showDanger("Failed", "Chapter already migrated.")
  //   })
  // }

  totalLessonAdded(){
    console.log(this.parentId);
    
    localStorage.setItem("lessonId",this.parentId)
    let standardId=localStorage.getItem("standardId")
    let divisionId=localStorage.getItem("divisionId")
    console.log("div",divisionId);
    console.log("st",standardId);
    this.comService.executePOSTAPI(APIStandars.ifTotalLessonAdded, {lessonId:this.parentId, standardId:standardId, divisionId:divisionId}).subscribe(
      (data)=>{
        this.lessonAdded=data
        this.idd=data["id"]
        console.log(this.idd);
        localStorage.setItem("microId",this.idd)
        console.log(this.parentId);
        this.totalLessonStatus=data["status"]
        console.log(this.totalLessonStatus);  
      }
    )
  }

  logTeachingStart(){
    var dialogRef = this.matDialog.open(ChapterSublevelPresentModalComponent, {
      data: {
        assignTeacherId : this.assignLessonId,
        lessonId : this.parentId
      }
    })
    // this.comService.executePOSTAPI(APIStandars.logTeachingStart,{assignTeacherId:this.assignLessonId, lessonId:this.parentId }).subscribe(
    //   (data)=>{
    //     console.log(data);
        
    //   }
    // )
  }

  addChapter() {
    var dialogRef = this.matDialog.open(ChapterMicrounitCountModalComponent)
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.totalLessonAdded()
      }
    )
    
 }

 originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  return 0;
}

}
