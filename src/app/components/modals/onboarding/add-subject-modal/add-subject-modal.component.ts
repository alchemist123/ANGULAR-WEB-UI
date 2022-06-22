import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;

@Component({
  selector: 'app-add-subject-modal',
  templateUrl: './add-subject-modal.component.html',
  styleUrls: ['./add-subject-modal.component.css']
})
export class AddSubjectModalComponent implements OnInit {

  @Input() dataTarget="" 
  @Input() selectedSubject :any = "";
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  
  
 subjectForm: any;
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
    if(this.selectedSubject==""){
      this.selectedSubject = {
        subject:"",
        type:""
      }
    }
    this.subjectForm = this.fb.group({
      subjects:[this.selectedSubject.subject, Validators.required],
      type:[this.selectedSubject.type, Validators.required]
    })
    
  }

  


  addOrUpdateSubject(){
    let formValue = this.subjectForm.value
    if(this.selectedSubject!=""){
      formValue = {...formValue, "id":this.selectedSubject._id}
    }
    this.comService.executePOSTAPI(APIStandars.addSubjectAPI, formValue).subscribe(
      (data)=>{
        this.notify.showSuccess("Success","Subject has been added successfully.")
        this.formSubmitted.emit("form submitted")
      },
      (err)=>{
        this.notify.showDanger("Failed", "Failed to complete operation.")
      }
    )
  }

}
