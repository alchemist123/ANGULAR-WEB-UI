import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { StudentUnitThemeModalComponent } from '../student-unit-theme-modal/student-unit-theme-modal.component';

@Component({
  selector: 'app-student-unit-selection',
  templateUrl: './student-unit-selection.component.html',
  styleUrls: ['./student-unit-selection.component.css']
})
export class StudentUnitSelectionComponent implements OnInit {
  subjectId: any;
  units: any;
  theme: any;
  chapterId: any;

  constructor(private communicationsService:CommunicationService,private dialog : MatDialog,private activatedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.subjectId = data["id"]
      }
    )
    this.listUnit()
  }

  listUnit(){
    this.communicationsService.executePOSTAPI(APIStandars.listUnitWithChapter,{parentLessonId:this.subjectId}).subscribe(
      (data)=>{
        console.log(data);
        this.units = data
      }
    )
  }

  openTheme(){
    var dialogRef = this.dialog.open(StudentUnitThemeModalComponent,{
      data:{theme:this.theme}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        //this.totalLessonAdded()
      }
    )
  }

  selectTheme(unit){
    this.theme = unit["theme"] 
    console.log("theme",this.theme);
    this.openTheme()
    
  }
  
loadChapters(id){
  //this.router.navigate(["/student/bookView/"+id+"/"+19])
  this.router.navigate(["/student/getAssesmentQuestions/"+id+"/"+19])
}


// loadBookView(id){
//   if (this.previousStatus == 'true') {
//     this.router.navigate(["/student/getAssesmentQuestions/"+id+"/"+19])
//   }
//   else{
//     this.router.navigate(["/student/bookView/"+id])
//   }
//   }



}
