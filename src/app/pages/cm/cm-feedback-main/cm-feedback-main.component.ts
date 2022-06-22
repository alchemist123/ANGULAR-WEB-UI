import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { CmFeedbackModalComponent } from '../cm-feedback-modal/cm-feedback-modal.component';

@Component({
  selector: 'app-cm-feedback-main',
  templateUrl: './cm-feedback-main.component.html',
  styleUrls: ['./cm-feedback-main.component.css']
})
export class CmFeedbackMainComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['No','Name','review']
  reviewData: any;
  reviewId: any;
  constructor(private communicationsService:CommunicationService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.listfeedback()
  }

  selectReview(element){
    this.reviewId = element["_id"]
    console.log("data",this.reviewId);
    this.reviewFeedBack()
  }
  listfeedback(){
    this.communicationsService.executePOSTAPI(APIStandars.listfeedback,{status:"0"}).subscribe(
      (data)=>{
        console.log(data);
        this.dataSource = data
        
        
      }
    )
  }

  reviewFeedBack(){
    var dialogRef = this.dialog.open(CmFeedbackModalComponent, {
      data:{_id:this.reviewId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listfeedback()
      }
    )
    
  }
 

}
