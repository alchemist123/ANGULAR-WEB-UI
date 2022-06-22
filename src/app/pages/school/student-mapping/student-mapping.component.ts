import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { StudentPromotionClassSelectionModalComponent } from '../student-promotion-class-selection-modal/student-promotion-class-selection-modal.component';
import { StudentPromotionFilterComponent } from '../student-promotion-filter/student-promotion-filter.component';
import { StudentTransferModalComponent } from '../student-transfer-modal/student-transfer-modal.component';

declare var $: any;
@Component({
  selector: 'app-student-mapping',
  templateUrl: './student-mapping.component.html',
  styleUrls: ['./student-mapping.component.css'],
})
export class StudentMappingComponent implements OnInit {
  mappingList: any = [];
  currentMapping: any = '';
  query:any
  standardId: any;
  divisionId: any;
  check : boolean = false;
  chechForm:any
  studentDataList: any;
  studentId: any = [];
  newStandardId: any;
  newDivisionId: any;
  studentIdd: any;
  constructor(
    private comService: CommunicationService,
    private notify: NotificationsService,
    private dialog:MatDialog,
    private fb:FormBuilder
  ) {}

  ngOnInit(): void {
    this.chechForm = this.fb.group({
      checked:["",Validators.required]
    })
    this.refreshList();
  }
  

  selectSubject(maping) {
    console.log('selected subject', maping);
    this.currentMapping = maping
    $('#studentMapingModal').modal('show');
  }

  refreshList() {
    console.log('Event recieved');
    this.comService.executePOSTAPI(APIStandars.listAssignStudent, {}).subscribe(
      (data) => {
        this.mappingList = data;
        console.log(this.mappingList);
        console.log(this.divisionId);
        $('#studentMapingModal').modal('hide');
      },
      (err) => {
        console.log(err);
        this.notify.showDanger('Error', 'Failed to fetch subject details.');
      }
    );
  }

  studentFilter(){
    var dialogRef = this.dialog.open(StudentPromotionFilterComponent,{
      data:{}
    }) 
    dialogRef.afterClosed().subscribe(
      (result)=>{
        
        console.log(`result: ${result}`);
        this.standardId = result.standard
        this.divisionId = result.division
        console.log(this.standardId,this.divisionId);
        this.refreshList()
      }
    )
  }

  studentData(student){
    this.studentIdd = student["studentId"]
    //this.studentId.push(this.studentIdd)
    this.newStandardId = student["standardId"]
    this.newDivisionId = student["divisionId"]
    console.log(this.studentId);
    
  }

  selectChk(Id, event){
    //this.studentId = student["studentId"]
    const checked = event.checked; 
   if (checked) {
     this.studentId.push(Id); 
      } else {
      const index = this.studentId.findIndex(list => list == Id);
      this.studentId.splice(index, 1); 
    }
    
  }

 

 promotion(){
  let data = this.chechForm.value.checked
  var dialogRef = this.dialog.open(StudentPromotionClassSelectionModalComponent,{
    data:{studentId:this.studentId}
  })
  dialogRef.afterClosed().subscribe(
    (result)=>{
      this.refreshList()
      this.studentId =[];
    }
  )
 }

 transferStudent(){
   var dialogRef = this.dialog.open(StudentTransferModalComponent,{
    data:{studentId:this.studentId}
   })
   dialogRef.afterClosed().subscribe(
    (result)=>{
      this.refreshList()
      this.studentId =[];
    }
  )
 }



  addMapping() {
    this.currentMapping = '';
    $('#studentMapingModal').modal('show');
  }
}
function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

