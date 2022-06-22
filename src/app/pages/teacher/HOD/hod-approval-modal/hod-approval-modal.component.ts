import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-hod-approval-modal',
  templateUrl: './hod-approval-modal.component.html',
  styleUrls: ['./hod-approval-modal.component.css']
})
export class HodApprovalModalComponent implements OnInit {
  standardId:any
  divisionId:any
  lessonId:any
  preassesment: any;
  data:any=""
  eventForm:any
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  value1=0;
  value2=0;
  value3=0;
  value4=0;
  value5=0;
  value6=0;
  value7=0;
  value8=0;
  remark:any
  vertical = false;
  tickInterval = 1;
  
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  constructor(private fb:FormBuilder, private comSerices:CommunicationService, private notify: NotificationsService,private dialog:MatDialog, 
    @Inject(MAT_DIALOG_DATA) public val: any
) { 
  
  console.log(this.val.chapterId);
  
}

  ngOnChanges(){
    this.initForms()
  }

  ngOnInit(): void {
   
    this.standardId=localStorage.getItem("standardId")
    this.divisionId=localStorage.getItem("divisionId")
    this.lessonId=localStorage.getItem("lessonId")
    console.log(this.standardId, this.divisionId,this.lessonId);
    
    this.initForms()
    console.log(this.value);
    this.comSerices.executePOSTAPI(APIStandars.HOD.ifReviewed,{lessonId:this.val._id, standardId:this.standardId, divisionId:this.divisionId}).subscribe(
      (data)=>{
        console.log(data);
        if(data["status"]==true){
        this.value=data["preassessment"]
        this.value1=data["learningObjective"]
        this.value2=data["topic"]
        this.value3=data["concept"]
        this.value4=data["activity"]
        this.value5=data["selfassessment"]
        this.value6=data["learningOutcome"]
        this.value7=data["postassessment"]
        this.remark=data["remark"]
        }
        
        console.log("data",this.value);
        
      }
    )
    
    console.log(this.value);
    
  }

  initForms(){
    if(this.data==""){
      this.data={
        value:"",
        value1:"",
        value2:"",
        value3:"",
        value4:"",
        value5:"",
        value6:"",
        value7:"",
        value8:"",
        remark:""

      }
    }

    this.eventForm=this.fb.group({
      value:[this.data.value],
      value1:[this.data.value1],
      value2:[this.data.value2],
      value3:[this.data.value3],
      value4:[this.data.value4],
      value5:[this.data.value5],
      value6:[this.data.value6],
      value7:[this.data.value7],
      value8:[this.data.value8],
      remark:[this.data.remark]
    })
  }

  hodApproval(){
    this.comSerices.executePOSTAPI(APIStandars.HOD.reviewLesson,{chapterId:this.val.chapterId,lessonId:this.val._id, standardId:this.standardId, divisionId:this.divisionId, preassessment:this.value, learningObjective:this.value1, topic:this.value2, concept:this.value3, activity:this.value4, selfassessment:this.value5, learningOutcome:this.value6, postassessment:this.value7, remark:this.remark,reviewStatus:true}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
        this.dialog.closeAll()
        
      },
      (err)=>{
        this.notify.showDanger("Failed","Failed to complete operation")
      }
      
    )
  }

  ifReviewed(){
  
  }

  reviewReject(){
    this.comSerices.executePOSTAPI(APIStandars.HOD.reviewLesson,{chapterId:this.val.chapterId,lessonId:this.val._id, standardId:this.standardId, divisionId:this.divisionId, preassessment:this.value, learningObjective:this.value1, topic:this.value2, concept:this.value3, activity:this.value4, selfassessment:this.value5, learningOutcome:this.value6, postassessment:this.value7, remark:this.remark,reviewStatus:false}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
        this.dialog.closeAll()
        
      },
      (err)=>{
        this.notify.showDanger("Failed","Failed to complete operation")
      }
      
    )
  }

}
