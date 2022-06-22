import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-teacher-lab-all-modules',
  templateUrl: './teacher-lab-all-modules.component.html',
  styleUrls: ['./teacher-lab-all-modules.component.css']
})
export class TeacherLabAllModulesComponent implements OnInit {
  courseList: any;
  batchId: any;

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (data)=>{
        this.batchId = data["id"]
      }
    )
    this.listLesson()
  }

  listLesson(){
    this.comService.executePOSTAPI(APIStandars.listteacherLabChapters,{}).subscribe(
      (data)=>{
        console.log(data);
        this.courseList = data
      }
    )
  }

  getInventory(datas){
    localStorage.setItem("InventoryDataId", datas._id)
    localStorage.setItem("taskName",datas.lessonName)
  }
}
