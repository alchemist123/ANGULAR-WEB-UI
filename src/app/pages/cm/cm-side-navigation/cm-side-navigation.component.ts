import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-cm-side-navigation',
  templateUrl: './cm-side-navigation.component.html',
  styleUrls: ['./cm-side-navigation.component.css']
})
export class CmSideNavigationComponent implements OnInit {

  inventoryId:any
  inventory:any
  @Output() onInventorySelected:EventEmitter<string> = new EventEmitter<string>();
  id: any;
  userType: any;
  inventoryDataId: any;
  
  constructor(private activatedRouter: ActivatedRoute,private comService: CommunicationService,private authService:AuthService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe((params)=>{
      this.inventoryId = params["id"]
      console.log( this.inventoryId);
      
    })
    this.inventoryDataId = localStorage.getItem("InventoryDataId")
    this.userType = localStorage.getItem("userType")
    console.log(this.inventoryDataId)
    if(this.inventoryDataId){
      this.listInventory()
    }
    
  }
  listInventory(){
    if(this.userType == "student"){
     this.comService.executePOSTAPI(APIStandars.listStudentInventory,{parentLessonId:this.inventoryDataId}).subscribe(
      (data)=>{
        console.log(data);
        this.inventory = data
        this.id = data[0]._id
        localStorage.setItem("inventoryId", this.id)
        console.log( "dat",this.id);
        
      }
     )
    }
    else{
      this.comService.executePOSTAPI(APIStandars.listteachertInventory,{parentLessonId:this.inventoryDataId}).subscribe(
        (data)=>{
          console.log(data);
          this.inventory = data
          this.id = data[0]._id
          localStorage.setItem("inventoryId", this.id)
          console.log( "datas",this.id);
          
        }
      )

    }
  }

  

 

}
