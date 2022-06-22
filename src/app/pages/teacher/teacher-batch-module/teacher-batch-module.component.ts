import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-teacher-batch-module',
  templateUrl: './teacher-batch-module.component.html',
  styleUrls: ['./teacher-batch-module.component.css']
})
export class TeacherBatchModuleComponent implements OnInit {
  batchId: any;
  batches: Object;

  constructor(private comService:CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.batchId = data["id"]
      }
    )
    this.listBatchModules()
  }
  listBatchModules(){
    this.comService.executePOSTAPI(APIStandars.listBatchModules,{batchId:this.batchId}).subscribe(
      (data)=>{
        console.log(data);
        this.batches = data
      }
    )
  }

}
