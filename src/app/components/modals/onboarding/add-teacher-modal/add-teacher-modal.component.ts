import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;

@Component({
  selector: 'app-add-teacher-modal',
  templateUrl: './add-teacher-modal.component.html',
  styleUrls: ['./add-teacher-modal.component.css']
})
export class AddTeacherModalComponent implements OnInit {


  @Input() dataTarget="" 
  @Input() selectedTeacher:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
 teacherForm: any;
  selectedDate:any;
  dob: any;

  constructor(private fb: FormBuilder, private notify: NotificationsService, private comService: CommunicationService) {

   }

   ngOnChanges(){
     this.initForms()
   }

  ngOnInit(): void {
    this.initForms()
    $( "#datepicker" ).datepicker({
      onSelect: (dateText: any, object: any) => {
          this.teacherForm.get('dob').setValue(dateText);
      }})
  }


  initForms()
  {
    if(this.selectedTeacher==""){
      this.selectedTeacher = {
        teacherFirstName:"",
        teacherLastName:"",
        dob:"",
        data:[{email:""}],
        mobileNumber:"",
        gender:"",
        bloodGroup:"",
        teacherQuli:"",
        teacherAddress:"",
        permission:true

      }
    }
    this.teacherForm = this.fb.group({
      teacherFirstName:[, Validators.required],
      teacherLastName:[this.selectedTeacher.teacherFirstName, Validators.required],
      dob:[this.selectedTeacher.dob],
      email:[this.selectedTeacher.data[0].email, [Validators.required, Validators.email]],
      mobileNumber:[this.selectedTeacher.mobileNumber, [Validators.required]],
      gender:[this.selectedTeacher.gender,Validators.required],
      bloodGroup:[this.selectedTeacher.bloodGroup, Validators.required],
      teacherQuli:[this.selectedTeacher.teacherQuli, Validators.required],
      teacherAddress:[this.selectedTeacher.teacherAddress, Validators.required],
      permission:[this.selectedTeacher.permission, Validators.required]
    })
    
  
  }

  


  addOrUpdateTeacher(){
    
    console.log(this.teacherForm.value)
    let formValue = this.teacherForm.value
    if(this.selectedTeacher!=""){
      formValue = {...formValue, "id":this.selectedTeacher._id}
    }
    this.comService.executePOSTAPI(APIStandars.addTeacher, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Teacher has been added successfully.")
        this.formSubmitted.emit("form submitted")
        this.teacherForm.reset()
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
