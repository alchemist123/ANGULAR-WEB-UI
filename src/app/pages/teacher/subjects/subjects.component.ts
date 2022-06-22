import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { TeacherSubjectSelectionModeModalComponent } from '../teacher-subject-selection-mode-modal/teacher-subject-selection-mode-modal.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects = []
  subjectsId: any;
  mode: any;
  constructor(private comService: CommunicationService, private router:Router, private dialog : MatDialog) { }

  ngOnInit(): void {
    localStorage.setItem("HODMODE","false")
    localStorage.setItem("previousData","true")
    this.comService.executePOSTAPI(APIStandars.listSubjectForTeacher,{}).subscribe(
      (data:any)=>{
        console.log(data);
        
        this.subjects = data
      }
    )
  }
  

  selectSubject(subjectId:any, standardId, divisionId,standard, division,mode,foundation){
      this.subjectsId = subjectId
      this.mode = mode
      console.log(this.subjectsId);
      if(foundation == true ){
        this.router.navigate(["teacher/kg-chapters"])}
      localStorage.setItem("standardId",standardId);
      localStorage.setItem("standard",standard);
      localStorage.setItem("division",division);
      localStorage.setItem("divisionId", divisionId);
      localStorage.setItem("mappingId",subjectId)
      if(this.mode == '0'){
        this.router.navigate(["teacher/unit/"+subjectId+"/"+mode])
      }
      else if(this.mode == '1'){
        if(foundation == true ){
          this.router.navigate(["teacher/kg-chapters/"+subjectId])}
          else{
            this.router.navigate(["teacher/chapters/"+subjectId+"/"+mode])
          }
        
      }
      
      
      else{
        this.selectionMode()
      }
      
  }

  selectionMode(){
    var dialogRef = this.dialog.open(TeacherSubjectSelectionModeModalComponent, {
      data:{subjectId:this.subjectsId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
       this.ngOnInit()
      }
    )
  }

}
