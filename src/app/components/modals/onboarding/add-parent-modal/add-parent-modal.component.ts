import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from "../../../../services/notifications/notifications.service"
declare var $:any;


@Component({
  selector: 'app-add-parent-modal',
  templateUrl: './add-parent-modal.component.html',
  styleUrls: ['./add-parent-modal.component.css']
})
export class AddParentModalComponent implements OnInit {

  @Input() dataTarget="" 
  @Input() selectedParent:any;
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
  parentForm: any;
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
          this.parentForm.get('dob').setValue(dateText);
      }})
  }


  initForms()
  {
    if(this.selectedParent==""){
      this.selectedParent = {
        parentFirstName:"",
        parentLastName:"",
        dob:"",
        data:[{email:""}],
        mobileNumber:"",
        gender:"",
        bloodGroup:"",
        parentAddress:""
      }
    }
    this.parentForm = this.fb.group({
      parentFirstName:[this.selectedParent.parentFirstName, Validators.required],
      parentLastName:[this.selectedParent.parentLastName, Validators.required],
      dob:[this.selectedParent.dob],
      email:[this.selectedParent.data[0].email, [Validators.required, Validators.email]],
      mobileNumber:[this.selectedParent.mobileNumber, [Validators.required]],
      gender:[this.selectedParent.gender,Validators.required],
      bloodGroup:[this.selectedParent.bloodGroup, Validators.required],
      parentAddress:[this.selectedParent.parentAddress, Validators.required]
    })
    
  
  }

  


  addOrUpdateParent(){
    console.log(this.parentForm.value)
    let formValue = this.parentForm.value
    if(this.selectedParent!=""){
      formValue = {...formValue, "id":this.selectedParent._id}
    }
    this.comService.executePOSTAPI(APIStandars.addParentAPI, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Parent added successfully.")
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

 



}
