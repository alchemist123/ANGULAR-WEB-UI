import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { BatchCodeComponent } from '../batch-code/batch-code.component';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {
  batchId: any;
  status: any;
  batches: any;
  userType: string;

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute,private matDialog: MatDialog) { }

  ngOnChanges(){
    this.enterBatch()
  }
  ngOnInit(): void {
    this.userType = localStorage.getItem("userType")
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.batchId = data["id"]
        console.log(this.batchId);
        
      }
    )
    this.enterBatch()
  }



  enterBatch(){
    if(this.userType == 'teacher'){
      this.comService.executePOSTAPI(APIStandars.enterBatch,{batchId:this.batchId}).subscribe(
        (data)=>{
          console.log(data);
          this.status = data["status"]
          this.batches = data["data"]
          console.log(this.batches);
          if(this.status==false){
            this.enterCode()
          }
         
        },
        (err)=>{
          
        }
      )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.enterBatchStudent,{batchId:this.batchId}).subscribe(
        (data)=>{
          console.log(data);
          this.status = data["status"]
          this.batches = data["data"]
          console.log(this.batches);
          if(this.status==false){
            this.enterCode()
          }
         
        },
        (err)=>{
          
        }
      )
    }
    
  }

  enterCode(){
    var dialogRef =  this.matDialog.open(BatchCodeComponent, {
      data:{batchId:this.batchId}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        console.log(data.data);
        
        if(data.data==true){
          this.enterBatch()
        }
      
      }
    )
  }

  getInventory(datas){
    localStorage.setItem("InventoryDataId", datas._id)
    localStorage.setItem("taskName",datas.lessonName)
  }

}
