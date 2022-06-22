import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-student-chapter-selection',
  templateUrl: './student-chapter-selection.component.html',
  styleUrls: ['./student-chapter-selection.component.css']
})
export class StudentChapterSelectionComponent implements OnInit {
  teacherName:any
  chapterList = []
  parentLessonId: any;
  textData: string;
  previousStatus: any;
  constructor(private communicationsService:CommunicationService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.previousStatus = localStorage.getItem('previousData');
    this.activatedRouter.params.subscribe((params) =>{
      this.parentLessonId = params["id"]
      this.getChapters()
    })

    
  }

 

  getChapters(){
      this.communicationsService.executePOSTAPI(APIStandars.getLessonForStudentAPI,{parentLessonId:this.parentLessonId}).subscribe(
        (data:any)=>{
          this.chapterList = data.lessons
        
          data.mapChapter.forEach((chapter)=>{
            this.chapterList.push(chapter[0])

          })
          if(this.chapterList.length == 0){
            this.textData = "Yet to publish, Contact your teacher."
          }
      })
      
  }
  loadBookView(id){
    if (this.previousStatus == 'true') {
      this.router.navigate(["/student/getAssesmentQuestions/"+id+"/"+19])
    }
    else{
      this.router.navigate(["/student/bookView/"+id])
    }
    }

    
}