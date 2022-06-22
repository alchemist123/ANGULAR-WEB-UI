import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { CmBatchCreateModalComponent } from '../cm-batch-create-modal/cm-batch-create-modal.component';

@Component({
  selector: 'app-cm-batches',
  templateUrl: './cm-batches.component.html',
  styleUrls: ['./cm-batches.component.css']
})
export class CmBatchesComponent implements OnInit {
  batches: any;

  constructor(private matdialog:MatDialog, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.listBatch()
  }
  
  addBatch(){
    var dialogRef = this.matdialog.open(CmBatchCreateModalComponent)
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listBatch()
      }
    )
  }

  listBatch(){
    this.comService.executePOSTAPI(APIStandars.listBatch,{}).subscribe(
      (data)=>{
        console.log(data);
        this.batches = data
      }
    )
  }

}
