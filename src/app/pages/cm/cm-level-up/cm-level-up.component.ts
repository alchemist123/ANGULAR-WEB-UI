import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { CmAddLevelModalComponent } from '../cm-add-level-modal/cm-add-level-modal.component';

@Component({
  selector: 'app-cm-level-up',
  templateUrl: './cm-level-up.component.html',
  styleUrls: ['./cm-level-up.component.css']
})
export class CmLevelUpComponent implements OnInit {
  levelData: any;

  constructor(private matdialog:MatDialog, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.listLevelUpTeachers()
  }

  addlevel(){
    var dialogRef = this.matdialog.open(CmAddLevelModalComponent)
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listLevelUpTeachers()
      }
    )
  }

  listLevelUpTeachers(){
    this.comService.executePOSTAPI(APIStandars.listLevelUpTeachers,{}).subscribe(
      (data)=>{
        console.log(data);
        this.levelData = data
      }
    )
  }

}
