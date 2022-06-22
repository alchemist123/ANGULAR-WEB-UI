import { Component, Input, OnInit } from '@angular/core';
import LessonStandards from 'src/app/LessonStandards';
import ContentStandards from "src/app/ContentStandards"
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import APIStandars from 'src/app/APIStandards';

declare var $: any;
@Component({
  selector: 'app-support-lesson-card',
  templateUrl: './support-lesson-card.component.html',
  styleUrls: ['./support-lesson-card.component.css']
})
export class SupportLessonCardComponent implements OnInit {

  @Input() unit ={lessonNumber:"", lessonName:"", type:"", typeText:"", contents:[], _id:""}
  @Input() concept:any
  @Input() typeText = ""
  @Input() parentId: any;
  @Input() refId: any;
  mediaType = ""
  datas: any;
  
  
  constructor(private router: Router, private comService: CommunicationService) { 
    
  }

  ngOnInit(): void {
    this.unit.typeText = LessonStandards[this.unit.type]
    this.mediaType = ContentStandards[this.unit.type]
    console.log(this.concept);
    
  }

  addUnit(type=null){
    //this.refId=localStorage.getItem("refId")
    console.log(this.refId);
     if(type=="14"){
      this.router.navigate(["/teacher/create-simple-activity/"+ this.parentId+"/"+type+"/"+this.unit._id])
    }
    else if(type=="15"){
      this.router.navigate(["/teacher/manage-experiential-activity/"+ this.parentId+"/"+type+"/"+this.unit._id])
    }
    else if(type=="18" || type=="19" || type=="20"){
      this.router.navigate(["/teacher/q-and-a/"+ this.parentId+"/"+type+"/"+this.unit._id])
    }
    else{
      this.router.navigate(["/teacher/digital-board/"+ this.parentId+"/"+type])
    }
    //this.listConcept()
  }


  selectId(id){
    this.refId = id
    //localStorage.setItem("refId",  this.refId)
    
    console.log("id",this.refId);
    
  }

  deleteSubContent(id){
    console.log("Delete content")
  }

}
