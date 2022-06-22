import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { LessonSubLevelsComponent } from 'src/app/pages/teacher/HOD/lesson-sub-levels/lesson-sub-levels.component';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-add-section-modal',
  templateUrl: './add-section-modal.component.html',
  styleUrls: ['./add-section-modal.component.css'],
})
export class AddSectionModalComponent implements OnInit {
  sectionForm: any;
  standard: any;
  section: any;
  options = [];
  query:any
  constructor(
    private communicationsService: CommunicationService,
    private notifications: NotificationsService,
    private fb: FormBuilder,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.sectionForm = this.fb.group({
      section: ['', Validators.required],
      standard: ['', Validators.required],
    });
    
    this.dropDownData();
  }

  

  dropDownData() {
    this.communicationsService
      .executePOSTAPI(APIStandars.listStandardAPI, {})
      .subscribe(
        (data:any) => {
          console.log(data);
          this.standard = data
          console.log(this.options);
        }
      );

    this.communicationsService
      .executePOSTAPI(APIStandars.listSections, {})
      .subscribe((data) => {
        console.log(data);
        this.section = data;
        console.log(this.section);
      });
  }

  mapSections(){
    console.log("hello");
    
    this.communicationsService.executePOSTAPI(APIStandars.mapSections,{sectionId:this.sectionForm.value.section, standardId:this.sectionForm.value.standard}).subscribe(
      (data)=>{
        console.log(data);
        this.notifications.showSuccess("Success","Section mapping has been saved.")
        this.dialog.closeAll()
      },
      
      (err)=>{
        this.notifications.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }
}
