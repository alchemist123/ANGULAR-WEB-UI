import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-lab-inventory-modal',
  templateUrl: './lab-inventory-modal.component.html',
  styleUrls: ['./lab-inventory-modal.component.css']
})
export class LabInventoryModalComponent implements OnInit {

  uploadedFileBase64: any;
  inventoryForm:any
  parentLessonId:any
  contentData: any;

  constructor(private fb:FormBuilder, private comService: CommunicationService,private dialog : MatDialog, private activatedRouter: ActivatedRoute,private notify: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public val: any) {
      console.log(this.val._id);
      
     }

  ngOnInit(): void {
    this.inventoryForm = this.fb.group({
      inventoryName: ["",[Validators.required]],
      inventoryDescr: ["",[Validators.required]],
      orderBy: ["",[Validators.required]],
      mediaType:["",[Validators.required]],
      contentType:["",[Validators.required]],
      url:["",[Validators.required]],
      inputFile:["",[Validators.required]]
    })
    
  }

  handleUpload(event) {
    console.log("selected event")
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        //console.log(reader.result);
        this.uploadedFileBase64 = reader.result;
    };
}

  createInventory(){
    if(this.inventoryForm.value.mediaType =='2'){
       this.contentData = this.uploadedFileBase64
    }
    else{
      this.contentData = this.inventoryForm.value.url
    }
    let formValue = this.inventoryForm.value
    console.log(formValue);
    
    this.comService.executePOSTAPI(APIStandars.createInventory,{lessonName:formValue.inventoryName, description:formValue.inventoryDescr, media_type:formValue.mediaType, contentType:formValue.contentType,contentData:this.contentData, parentLessonId:this.val._id}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
        this.dialog.closeAll()
      },(err)=>{
        this.notify.showDanger("Failed", "")
      
      }
    )
  }

}
