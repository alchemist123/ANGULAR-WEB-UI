import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-student-promotion-class-selection-modal',
  templateUrl: './student-promotion-class-selection-modal.component.html',
  styleUrls: ['./student-promotion-class-selection-modal.component.css']
})
export class StudentPromotionClassSelectionModalComponent implements OnInit {
  standard: any;
  division: any;
  studentForm: any;
  standardId: any;
  divisionId: any;
  studentId: any;
  newStandardId: any;
  newDivisionId: any;

  constructor(private dialogRef:MatDialog, private comService: CommunicationService,private fb:FormBuilder,private notify: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(val.studentId);
      
     }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      standard:["",Validators.required],
      division:["",Validators.required]
    })
    this.refreshList()
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

  studentPromotion(){
    this.newStandardId = this.studentForm.value.standard
    this.newDivisionId = this.studentForm.value.division
    console.log(this.standardId,this.divisionId);
    this.comService.executePOSTAPI(APIStandars.premotion,{studentId:this.val.studentId, newStandardId:this.newStandardId, newDivisionId:this.newDivisionId, status:'0'}).subscribe(
     (data)=>{
       console.log(data);
       this.notify.showSuccess("Success","You are successfully promoted these students.")
       this.dialogRef.closeAll()
     },
     (err)=>{
       this.notify.showDanger("Failed", "Failed to complete operation.")
     }
   )
   
 }

}
