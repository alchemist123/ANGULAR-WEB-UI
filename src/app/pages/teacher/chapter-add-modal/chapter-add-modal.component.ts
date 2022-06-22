import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AppComponent } from 'src/app/app.component';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
@Component({
  selector: 'app-chapter-add-modal',
  templateUrl: './chapter-add-modal.component.html',
  styleUrls: ['./chapter-add-modal.component.css']
})
export class ChapterAddModalComponent implements OnInit {

  @Input() addChapter:any = ""
  status=false
  addChapterForm:any
  lessonId
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();
  constructor(private comService: CommunicationService ,private fb:FormBuilder, private activatedRouter: ActivatedRoute, private notify: NotificationsService, private dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val.lessonId);
      
     }


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
    console.log(this.addChapterForm.value);
    let formValue = this.addChapterForm.value
    let id = localStorage.getItem("id")
    let lessonId=localStorage.getItem("lessonId")
    let standardId=localStorage.getItem("standardId")
    let divisionId=localStorage.getItem("divisionId")
    let noOfLesson=this.addChapterForm.value
    console.log(id);
    console.log("div",divisionId);
    console.log("st",standardId);
    console.log("lid",lessonId);
  
    this.comService.executePOSTAPI(APIStandars.addTotalLessonCount,{unitId:this.val.unitId,lessonId:this.val.lessonId, standardId:standardId, divisionId:divisionId, noOfLessons:formValue.chapter}).subscribe(
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
