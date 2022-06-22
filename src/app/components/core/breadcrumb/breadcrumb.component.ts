import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() lessonId: string;
  trials = []
  constructor(private communicationsService:CommunicationService, private router:Router) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.trials = []
    this.trials.push({id:localStorage.getItem("standardId"), text:localStorage.getItem("standard"), type:"subject"})
    this.trials.push({id:localStorage.getItem("divisionId"), text:localStorage.getItem("division"), type:"subject"})

    this.loadChapterTrails()
  }
  loadChapterTrails(){
      this.communicationsService.executePOSTAPI(APIStandars.getParentInfoTeacherAPI,{lessonId:this.lessonId}).subscribe((data)=>{
        console.log(data)
        this.generateTrials(data)
      })
  }

  generateTrials(data){

      var arrayToPush = []
      data[0].parents.forEach((ele)=>{
            this.trials.push({id:ele._id, text:ele.lessonNumber + ". "+ ele.lessonName, type:ele.type})
      })
  }
  loadPage(id,type){
       if(type=="subject"){
        this.router.navigate(["teacher/chapters/"+localStorage.getItem("mappingId")])
       }
       else{
         this.router.navigate(["teacher/sublevels/"+id])
       }
  }

}
