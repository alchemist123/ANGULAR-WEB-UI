import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-principal-unit-view',
  templateUrl: './principal-unit-view.component.html',
  styleUrls: ['./principal-unit-view.component.css']
})
export class PrincipalUnitViewComponent implements OnInit {

  lessons:any = []
  lessonId: any;
  unit: any;
  unitId: any;
  
  constructor(private activatedRouter: ActivatedRoute, private comService: CommunicationService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
      this.listUnit(data["id"])
      this.lessonId = data["id"]
    })
  }

  listUnit(id){
    this.comService.executePOSTAPI(APIStandars.principal.listUnitPrincipal,{parentLessonId:id}).subscribe(
      (data)=>{
        this.unit = data
      }
    )
  }

  selectUnit(unitId,parentLessonId){
    this.unitId = unitId
    this.router.navigate(["/principal/chapter-list/"+unitId])
  }

}
