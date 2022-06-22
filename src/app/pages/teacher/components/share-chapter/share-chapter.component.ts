import { Component, OnInit, Inject } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-share-chapter',
  templateUrl: './share-chapter.component.html',
  styleUrls: ['./share-chapter.component.css']
})
export class ShareChapterComponent implements OnInit {

  classId: string = "";
  classes: any = [];
  units: any;
  unitData: any;
  lessonId: any;
  unitId: any;
  teachers: any;
  userId: any;
  type: any;
  constructor(@Inject(MAT_DIALOG_DATA) public chapterData: any,private comService: CommunicationService,private matDialog: MatDialog, private notificationService:NotificationsService) {
    console.log(this.chapterData.chapterId, this.chapterData.unitId);
    this.type = this.chapterData.type
   }

  ngOnInit(): void {
      this.getTeachers()
      
      this.listUnit()
  }

  getTeachers(){
    this.comService.executePOSTAPI(APIStandars.listTeacherForShare,{from_id:localStorage.getItem("mappingId")}).subscribe(
      (data)=>{
        this.teachers = data
        console.log(data);
        
      }
    )
  }
  onTeacherSelect(teacher){
    this.userId = teacher.target.value
    this.getAssignedClasses();
  }
  getAssignedClasses(){
      this.comService.executePOSTAPI(APIStandars.listShareClass,{from_id:localStorage.getItem("mappingId"),teacherId:this.userId}).subscribe((data)=>{this.classes = data
      })
     
  }

  onSelect(classes){
    // this.unitData = this.units.filter(item=>item.parentLessonId == classes.target.value)
    // console.log(this.unitData);
    this.lessonId = classes.target.value
    console.log(classes.target.value);
    this.listUnit()
  }

  onUnitSelect(data){
    this.unitId = data.target.value
  }

  listUnit(){
    this.comService.executePOSTAPI(APIStandars.listUnit,{parentLessonId:this.lessonId}).subscribe(
      (data)=>{
        this.units = data
        console.log(data);
        
      }
    )
  }

  shareChaptertoUnit(){
    if(this.type=='1'){
      this.comService.executePOSTAPI(APIStandars.shareChapter,{chapterId:this.chapterData.chapterId,assignTeacherId:this.lessonId}).subscribe(
        (data)=>{
          console.log(data);
          this.notificationService.showSuccess("Success", "chapter shared successfully")
          this.matDialog.closeAll()
        },
        (err)=>{
                this.notificationService.showDanger("Failed", "Chapter already exists in selected class.")
               }
      )
    }
   else{
    this.comService.executePOSTAPI(APIStandars.shareChaptertoUnit,{lessonId:this.chapterData.chapterId, unitId:this.unitId}).subscribe(
      (data)=>{
        console.log(data);
        this.notificationService.showSuccess("Success", "unit shared successfully")
        this.matDialog.closeAll()
      },
      (err)=>{
              this.notificationService.showDanger("Failed", "unit already exists in selected class.")
             }
    )
   }
  }

  // shareChapter(){
  //     this.comService.executePOSTAPI(APIStandars.migrateLesson ,{chapterId: this.chapterData.chapterId,assignTeacherId:this.classId}).subscribe((data)=>{
  //         this.notificationService.showSuccess("Success", "Chapter shared successfully")
  //     },(err)=>{
  //       this.notificationService.showDanger("Failed", "Chapter already exists in selected class.")
  //     })
  // }

}

