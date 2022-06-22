import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.component.html',
  styleUrls: ['./add-student-modal.component.css']
})
export class AddStudentModalComponent implements OnInit {

  @Input() dataTarget="" 
  @Input() selectedStudent:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
  studentForm: any;
  selectedDate:any;
  dob: any;
  parentList = []
  constructor(private fb: FormBuilder, private notify: NotificationsService, private comService: CommunicationService) {

    this.comService.executePOSTAPI(APIStandars.listOfParents,{}).subscribe(
      (data:any)=>{
        this.parentList = data
      },
      (err)=>{
        this.notify.showDanger("Error","Failed to fetch parent details.")
      }
    )
   
   }

   ngOnChanges(){
     this.initForms()
   }

  ngOnInit(): void {
    this.initForms()
    $( "#datepicker" ).datepicker({
      onSelect: (dateText: any, object: any) => {
          this.studentForm.get('dob').setValue(dateText);
      }})
  }


  initForms()
  {
    if(this.selectedStudent==""){
      this.selectedStudent = {
        studentFirstName:"",
        studentLastName:"",
        dob:"",
        data:[{email:""}],
        mobileNumber:"",
        gender:"",
        bloodGroup:"",
        admissionNumber:"",
        studentAddress:"",
        parentId:""

      }
    }
    this.studentForm = this.fb.group({
      studentFirstName:[this.selectedStudent.studentFirstName, Validators.required],
      studentLastName:[this.selectedStudent.studentLastName, Validators.required],
      dob:[this.selectedStudent.dob],
      email:[this.selectedStudent.data[0].email, [Validators.required, Validators.email]],
      mobileNumber:[this.selectedStudent.mobileNumber, [Validators.required]],
      gender:[this.selectedStudent.gender,Validators.required],
      bloodGroup:[this.selectedStudent.bloodGroup, Validators.required],
      admissionNumber:[this.selectedStudent.admissionNumber, Validators.required],
      studentAddress:[this.selectedStudent.studentAddress, Validators.required],
      parentId:[this.selectedStudent.parentId, Validators.required]
    })
    
  
  }

  


  addOrUpdateStudent(){
    console.log(this.studentForm.value)
    let formValue = this.studentForm.value
    console.log( this.selectedStudent._id);
    
    if(this.selectedStudent!=""){
      formValue = {...formValue, "id":this.selectedStudent._id}
    }
    this.comService.executePOSTAPI(APIStandars.addStudentAPI, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Student added successfully.")
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
