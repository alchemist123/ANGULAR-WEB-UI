import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {
  inventoryId:any

  constructor(private activatedRouter: ActivatedRoute,private comService: CommunicationService,) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe((params)=>{
      this.inventoryId = params["id"]
      console.log( this.inventoryId);
      
    })
    this.listInventoryContent()
  }

  listInventoryContent(){
    this.comService.executePOSTAPI(APIStandars.listInventoryContent,{inventoryId:this.inventoryId}).subscribe(
      (data)=>{
        console.log(data);
        
      }
    )
  }

}
