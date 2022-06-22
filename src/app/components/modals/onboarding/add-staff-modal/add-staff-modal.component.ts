import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;

@Component({
  selector: 'app-add-staff-modal',
  templateUrl: './add-staff-modal.component.html',
  styleUrls: ['./add-staff-modal.component.css']
})
export class AddStaffModalComponent implements OnInit {


  @Input() dataTarget="" 
  @Input() selectedStaff:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
 staffForm: any;
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
          this.staffForm.get('dob').setValue(dateText);
      }})
  }


  initForms()
  {
    if(this.selectedStaff==""){
      this.selectedStaff = {
        staffFirstName:"",
        staffLastName:"",
        dob:"",
        data:[{email:""}],
        mobileNumber:"",
        gender:"",
        bloodGroup:"",
        role:"",
        staffAddress:"",
      }
    }
    this.staffForm = this.fb.group({
      staffFirstName:[this.selectedStaff.staffFirstName, Validators.required],
      staffLastName:[this.selectedStaff.staffFirstName, Validators.required],
      dob:[this.selectedStaff.dob],
      email:[this.selectedStaff.data[0].email, [Validators.required, Validators.email]],
      mobileNumber:[this.selectedStaff.mobileNumber, [Validators.required]],
      gender:[this.selectedStaff.gender,Validators.required],
      bloodGroup:[this.selectedStaff.bloodGroup, Validators.required],
      role:[this.selectedStaff.role, Validators.required],
      staffAddress:[this.selectedStaff.staffAddress, Validators.required]
    })
    
  
  }

  


  addOrUpdateStaff(){
    console.log(this.staffForm.value)
    let formValue = this.staffForm.value
    if(this.selectedStaff!=""){
      formValue = {...formValue, "id":this.selectedStaff._id}
    }
    this.comService.executePOSTAPI(APIStandars.addStaff, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Staff has been added successfully.")
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
