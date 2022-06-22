import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { AddSectionModalComponent } from 'src/app/components/modals/onboarding/add-section-modal/add-section-modal.component';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-section-mapping',
  templateUrl: './section-mapping.component.html',
  styleUrls: ['./section-mapping.component.css']
})
export class SectionMappingComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['No','Section','Standard']

  constructor(private dialog : MatDialog, private comServices:CommunicationService) { }

  ngOnInit(): void {
    this.listmapSection()
  }
  listmapSection(){
    this.comServices.executePOSTAPI(APIStandars.listmapSection,{}).subscribe(
      (data)=>{
        console.log(data);
        this.dataSource = data
      }
    )
  }

  addSection(){
    var dialogRef = this.dialog.open(AddSectionModalComponent)
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.listmapSection()
      }
    )
  }
}
