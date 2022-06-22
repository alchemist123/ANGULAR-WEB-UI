import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;

@Component({
  selector: 'app-add-division-modal',
  templateUrl: './add-division-modal.component.html',
  styleUrls: ['./add-division-modal.component.css']
})
export class AddDivisionModalComponent implements OnInit {

  @Input() dataTarget="" 
  @Input() selectedDivision:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
 divisionForm: any;
  selectedDate:any;
  dob: any;

  constructor(private fb: FormBuilder, private notify: NotificationsService, private comService: CommunicationService) {

   }

   ngOnChanges(){
     this.initForms()
   }

  ngOnInit(): void {
    this.initForms()
  }


  initForms()
  {
    if(this.selectedDivision==""){
      this.selectedDivision = {
        division:"",
      }
    }
    this.divisionForm = this.fb.group({
      divisions:[this.selectedDivision.division, Validators.required]
    })
    
  
  }

  


  addOrUpdateDivision(){
    let formValue = this.divisionForm.value
    if(this.selectedDivision!=""){
      formValue = {...formValue, "id":this.selectedDivision._id}
    }
    this.comService.executePOSTAPI(APIStandars.addDivisionAPI, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Division has been added successfully.")
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
