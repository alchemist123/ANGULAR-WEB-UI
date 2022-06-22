import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { StudentMappingComponent } from '../student-mapping/student-mapping.component';

@Component({
  selector: 'app-student-promotion-filter',
  templateUrl: './student-promotion-filter.component.html',
  styleUrls: ['./student-promotion-filter.component.css']
})
export class StudentPromotionFilterComponent implements OnInit {
  mappingList: any;
  standard: any;
  studentForm:any
  division: any;
  standardId: any;
  divisionId: any;
  constructor(private dialogRef:MatDialogRef<StudentMappingComponent>,private dialog:MatDialog, private comService: CommunicationService,private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public val: any) {
        val=this.standardId
        val=this.divisionId
     }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      standard:["",Validators.required],
      division:["",Validators.required]
    })
    this.refreshList()
  }


  studentFilter(){
     this.standardId = this.studentForm.value.standard
     this.divisionId = this.studentForm.value.division
     console.log("data",this.standardId,this.divisionId);
     this.dialogRef.close(this.studentForm.value)
     //this.dialogRef.close(this.divisionId)
  }

  refreshList() {
    this.comService.executePOSTAPI(APIStandars.listStandardAPI,{}).subscribe(
      (data)=>{
        console.log(data);
        this.standard = data
      },
      (err)=>{
       
      }
    )

    this.comService.executePOSTAPI(APIStandars.listDivisionAPI,{}).subscribe(
     (data)=>{
      console.log(data);
      this.division = data
     },
     (err)=>{
      
     }
   )

  }

}
