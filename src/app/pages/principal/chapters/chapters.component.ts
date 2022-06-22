import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  
  lessons:any = []
  lessonId: any;
  unit: any;
  constructor(private activatedRouter: ActivatedRoute, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
      this.getChapters(data["id"])
      this.lessonId = data["id"]
    })
  }


  getChapters(id){
      this.comService.executePOSTAPI(APIStandars.principal.listChapterinUnitPrincipal,{unitId:id}).subscribe((data)=>{
          console.log(data);
          this.lessons=data
          
          this.lessonId=this.lessons.map(item=>item._id)
          console.log(this.lessonId);
          localStorage.setItem("lessonsId", this.lessonId)
          // this.lessons = [...data["lessons"]];
          // data["mapChapter"].forEach((chapter)=>{
          //   this.lessons.push(chapter[0])
          // })
          // console.log(this.lessons);
          
      })
  }

 
}
