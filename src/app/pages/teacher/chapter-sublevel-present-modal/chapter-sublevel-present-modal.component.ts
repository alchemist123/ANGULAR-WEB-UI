import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-chapter-sublevel-present-modal',
  templateUrl: './chapter-sublevel-present-modal.component.html',
  styleUrls: ['./chapter-sublevel-present-modal.component.css']
})
export class ChapterSublevelPresentModalComponent implements OnInit {
  assignLessonId: any;
  

  constructor( private comSerices:CommunicationService,private dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public val: any){
    console.log(this.val.lessonId, this.val.assignTeacherId);
    
   }

  ngOnInit(): void {
  }

  logTeacher(){
    this.comSerices.executePOSTAPI(APIStandars.logTeachingStart,{assignTeacherId:this.val.assignTeacherId, lessonId:this.val.lessonId }).subscribe(
      (data)=>{
        console.log(data);
        this.dialog.closeAll()
         },

      (err)=>{
        this.dialog.closeAll()
      }
       )
  }

}
