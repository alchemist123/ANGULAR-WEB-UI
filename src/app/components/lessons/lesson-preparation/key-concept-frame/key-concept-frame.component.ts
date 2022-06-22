import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ContentStandards from 'src/app/ContentStandards';
import LessonStandards from 'src/app/LessonStandards';

@Component({
  selector: 'app-key-concept-frame',
  templateUrl: './key-concept-frame.component.html',
  styleUrls: ['./key-concept-frame.component.css']
})
export class KeyConceptFrameComponent implements OnInit {

  @Input() concept ={lessonNumber:"", lessonName:"", type:"", typeText:"", contents:[], _id:""}
  @Input() activity:any
  parentId: string;
  unit: any;
  mediaType = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.concept.typeText = LessonStandards[this.concept.type]
    this.mediaType = ContentStandards[this.concept.contents[0].contentType]
  }

  addUnit(type=null){
    //this.refId=localStorage.getItem("refId")
    console.log(this.refId);
     if(type=="14"){
      this.router.navigate(["/teacher/create-simple-activity/"+ this.parentId+"/"+type+"/"+this.concept._id])
    }
    else if(type=="15"){
      this.router.navigate(["/teacher/manage-experiential-activity/"+ this.parentId+"/"+type+"/"+this.concept._id])
    }
    else if(type=="18" || type=="19" || type=="20"){
      this.router.navigate(["/teacher/q-and-a/"+ this.parentId+"/"+type+"/"+this.concept._id])
    }
    else{
      this.router.navigate(["/teacher/digital-board/"+ this.parentId+"/"+type])
    }
    //this.listConcept()
  }
  refId(refId: any) {
    throw new Error('Method not implemented.');
  }

}
