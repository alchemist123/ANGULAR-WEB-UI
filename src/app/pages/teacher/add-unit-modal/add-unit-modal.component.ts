import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-add-unit-modal',
  templateUrl: './add-unit-modal.component.html',
  styleUrls: ['./add-unit-modal.component.css'],
})
export class AddUnitModalComponent implements OnInit {
  @Output() onClick: EventEmitter<string> = new EventEmitter();
  unitForm: any;
  unit: any;
  unitNumber = '';
  unitName = '';
  theme = '';
  unitId = '';
  lessonId: any;
  themedata: Event;

  constructor(
    private fb: FormBuilder,
    private comService: CommunicationService,
    private notify: NotificationsService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any
  ) {
    console.log(val.id, val.unitId, val.parentId);
    this.unitId = this.val.unitId;
    this.lessonId= this.val.id;
    console.log(this.unitId);
  }
  ngOnChanges() {
    if ((this.val.unitId = '')) {
      this.listUnit();
    } else {
      this.initModal();
    }
  }

  ngOnInit(): void {
    this.initModal();
    this.listUnit();
    if(this.val.id!=undefined){
      this.retriveExisitngData()
    }
  }

  initModal() {
    console.log('data');

    this.unitForm = this.fb.group({
      unitNumber: [this.unitNumber, Validators.required],
      unitName: [this.unitName, Validators.required],
      theme: [this.theme, Validators.required],
    });
  }

  addUnit() {
    console.log('helo');
    console.log(this.unitForm.value);

    let formValue = this.unitForm.value;
    console.log(formValue);
    formValue = {
      ...formValue,
      parentlessonId: this.val.id,
      id: this.val.unitId,
    };
    console.log(formValue);
    if ((this.val.unitId = '')) {
      this.comService
        .executePOSTAPI(APIStandars.createUnit, formValue)
        .subscribe(
          (data) => {
            console.log(data);
            this.notify.showSuccess('Success', 'Unit created successfully.');
            this.dialog.closeAll();
          },
          (err) => {
            this.notify.showDanger('Failed', 'Failed to complete operation.');
          }
        );
    } else {
      this.comService
        .executePOSTAPI(APIStandars.createUnit, formValue)
        .subscribe(
          (data) => {
            console.log(data);
            this.notify.showSuccess('Success', 'Unit created successfully.');
            this.dialog.closeAll();
          },
          (err) => {
            this.notify.showDanger('Failed', 'Failed to complete operation.');
          }
        );
    }
  }

  getTheme($event){
   
    this.themedata = $event
    console.log("data",this.themedata);
    this.unitForm.controls["theme"].setValue($event)
  }



  retriveExisitngData(){
    this.comService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.val.id}).subscribe(
      (data)=>{
          // this.activityTitle = data[0].lesson[0].lessonName
          // var jsonData = JSON.parse(data[0].contentData)
          // this.activityDescription_ = jsonData["description"]
          // this.activityObjective_ = jsonData["objective"]
          // console.log("Activity description", this.activityDescription)
          // var activitySteps = jsonData["steps"]
          // console.log("stepss", activitySteps)
          // if(activitySteps.length>0){
          //   this.steps = []
          //   this.steps_ = []
          // }
          // activitySteps.forEach((step)=>{this.addNewStep(step)})
          // this.activityMaterials_ = jsonData["materials"]
      },
      (err)=>{
        //this.notifications.showDanger("Failed", "Failed to fetch data. Please try again")
      }
    )
}



  listUnit() {
    this.comService
      .executePOSTAPI(APIStandars.getUnitDetails, { id: this.val.unitId })
      .subscribe((data: any) => {
        this.unitNumber = data.unitNumber;
        this.unitName = data.unitName;
        this.theme = data.theme;
        this.initModal();
        console.log(data);
      });
  }
}
