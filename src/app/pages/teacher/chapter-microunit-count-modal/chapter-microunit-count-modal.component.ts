import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-chapter-microunit-count-modal',
  templateUrl: './chapter-microunit-count-modal.component.html',
  styleUrls: ['./chapter-microunit-count-modal.component.css']
})
export class ChapterMicrounitCountModalComponent implements OnInit {
  addChapterForm: any;
  formSubmitted: any;
  @Input() addChapter:any =  ""

  constructor(private comService: CommunicationService ,private fb:FormBuilder, private activatedRouter: ActivatedRoute, private notify: NotificationsService, private dialog : MatDialog) { }

  ngOnChanges(){
    this.initForms()
  }

  ngOnInit(): void {
    this.initForms()
    
  }

 initForms(){
  if(this.addChapter==""){
    this.addChapter={
      chapter:""
    }
  }

  this.addChapterForm = this.fb.group({
    chapter:[this.addChapter.chapter, Validators.required]
  })
 }



  addTotalLessonCount(){
    let formValue = this.addChapterForm.value
    console.log(this.addChapterForm.value);
    let id=localStorage.getItem("microId")
    let lessonId=localStorage.getItem("lessonId")
    let standardId=localStorage.getItem("standardId")
    let divisionId=localStorage.getItem("divisionId")
    let noOfLesson=this.addChapterForm.value
    console.log(id);
    console.log("div",divisionId);
    console.log("st",standardId);
    console.log("lid",lessonId);
    if(this.addChapter!==""){
      formValue= {...formValue,"id":id}
      
    }
    this.comService.executePOSTAPI(APIStandars.addTotalLessonCount,{lessonId:lessonId, standardId:standardId, divisionId:divisionId, noOfLessons:formValue.chapter}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","Total number of chapters added successfully.")
        this.dialog.closeAll()
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
    
  }

}
