import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;

@Component({
  selector: 'app-add-standard-modal',
  templateUrl: './add-standard-modal.component.html',
  styleUrls: ['./add-standard-modal.component.css']
})
export class AddStandardModalComponent implements OnInit {

  @Input() dataTarget="" 
  @Input() selectedStandard:any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
  standardForm: any;
  selectedDate:any;
  dob: any;
  standard: any [] = ['LKG','UKG','UKG','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  syllabus: any[] = ['CBSE', 'ICSE', 'ISC', 'KSB'];
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
    if(this.selectedStandard==""){
      this.selectedStandard = {
        standards:"",
        syllabus:"",
      }
    }
    this.standardForm = this.fb.group({
      standards:[this.selectedStandard.standards, Validators.required],
      syllabus:[this.selectedStandard.syllabus,Validators.required]
    })
    
  
  }

  

  


  addOrUpdateStandard(){
    let standard = this.standardForm.value.standards + " " +this.standardForm.value.syllabus
    var formValue
    //let formvalue1 = this.standardForm.value.syllabus
    //let formvalue2 = formValue.concat(formvalue1)
    //console.log(formvalue2);
    
    //if(this.selectedStandard!=""){
      formValue = {standards:standard, "id":this.selectedStandard._id}
    //}
    this.comService.executePOSTAPI(APIStandars.addStandardAPI, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Standard has been added successfully.")
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
