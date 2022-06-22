import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-chapter-modal',
  templateUrl: './add-chapter-modal.component.html',
  styleUrls: ['./add-chapter-modal.component.css']
})
export class AddChapterModalComponent implements OnInit {

  lessonForm: any;
  @Input() parentId: any;
  @Input() unitId: any
  @Input() dataTarget="" 
  @Input() type=""
  @Input() subType = ""
  @Input() typeText = ""
  @Input() lessonId = ""
  @Input() complex;
  lessonName = ""
  lessonNumber = ""
  timeRequired = ""
  knowledge = "1"
  startDate = ""
  endDate = ""

  @Output() formSubmitted: EventEmitter<string> = new EventEmitter();  


  constructor(private fb: FormBuilder, private comService: CommunicationService, private notifications: NotificationsService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
   }
  ngOnInit(): void {
    
    this.initModal()
    //this.getLessonInfo()
  }
  ngOnChanges(){
    if(this.lessonId!=""){
        this.getLessonInfo()
    }else{
    this.initModal()
    }
  }

  initModal(){
      this.lessonForm = this.fb.group(
        {
          lessonName: [this.lessonName, Validators.required],
          lessonNumber: [this.lessonNumber, Validators.required],
          timeRequired:[this.timeRequired],
          knwoledge:[this.knowledge.toString(), Validators.required],
          complex:[this.complex, Validators.required],
          startDate:[this.startDate,Validators.required],
          endDate:[this.endDate,Validators.required],
        }
      )

      if(this.typeText=='nano unit'){
        this.complex = false;
        this.lessonForm.get("complex").setValue(false);
      }
  }

  addLesson(){
    if(this.typeText=='nano unit'){
      this.complex = false;
      this.lessonForm.get("complex").setValue(false);
    }
    if(this.lessonId==""){
      this.comService.executePOSTAPI(APIStandars.addLesson,{...this.lessonForm.value,type:this.type, parentLessonId: this.parentId, unitId:this.unitId }).subscribe(
        (data)=>{
          
          this.notifications.showSuccess("Success",this.typeText + " has been added successfully.")
          this.formSubmitted.emit("Form submitted")
        },
        (err)=>{
          this.notifications.showDanger("Failed","Adding " + this.typeText+  " is failed, Please try again.")
        }
      )}else{
        this.comService.executePOSTAPI(APIStandars.addLesson,{...this.lessonForm.value,type:this.type, parentLessonId: this.parentId, lessonId: this.lessonId, unitId:this.unitId}).subscribe(
          (data)=>{
            
            this.notifications.showSuccess("Success", this.typeText + " has been added successfully.")
            this.formSubmitted.emit("Form submitted")
          },
          (err)=>{
            this.notifications.showDanger("Failed","Updating " + this.typeText + "  is failed, Please try again.")
          }
        )
      }
  }

  getLessonInfo() {
    console.log("Getting lesson information")
      this.comService.executePOSTAPI(APIStandars.getLessonForTeachers,{parentLessonId:this.lessonId}).subscribe((data:any)=>{
        console.log(data);
        
        this.lessonName = data.lessonName
        this.lessonNumber = data.lessonNumber
        this.knowledge = data.knwoledge
        this.timeRequired = data.timeRequired
        this.complex = data.complex
        this.startDate = data.startDate
        this.endDate = data.endDate
        this.timeRequired = data.Periods
        this.initModal()
      })
  }

}
