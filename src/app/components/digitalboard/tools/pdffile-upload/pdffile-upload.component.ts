import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import LessonStandards from "src/app/LessonStandards"
import { Location } from '@angular/common'

@Component({
  selector: 'app-pdffile-upload',
  templateUrl: './pdffile-upload.component.html',
  styleUrls: ['./pdffile-upload.component.css']
})
export class PDFFileUploadComponent implements OnInit {
  @ViewChild('pdfViewerOnDemand') pdfViewerOnDemand;
   lessonId: any;
  type:any;
  private uploadedFileBase64: any;
  forText = ""
  lessonName = ""
  lessonNumber = ""
  contentId: any = "";
  pdfBase64 : any;
  lessonTypes = LessonStandards


  constructor(private location: Location, private communicationsService:CommunicationService, private notify:NotificationsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params =>{
      this.lessonId = params["id"]
      this.type = params["type"]
      this.contentId = params["componentId"]
      this.getLessonInfo()
      this.getPDFFile()
      this.getContentInfo()
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
uploadFile(){
  console.log("uploading")
  this.communicationsService.executePOSTAPI(APIStandars.addSupportLessonAPI,{lessonName:this.lessonName, lessonNumber:this.lessonNumber,parentLessonId:this.lessonId,type:this.type ,media_type:"2", contentType:"2",file:this.uploadedFileBase64.split("base64,")[1]}).subscribe(
    (data) =>{
    this.notify.showSuccess("Success","File uploaded successfully")
    this.router.navigate(["/teacher/sublevels/"+this.lessonId])
  },
    (err)=>{
      this.notify.showDanger("Error","File uploading failed, Please try again")
    }
  )
}
getLessonInfo(){
  this.communicationsService.executePOSTAPI(APIStandars.getLessonForTeachers,{parentLessonId:this.lessonId}).subscribe(
    (data:any)=>{
      this.forText = LessonStandards[this.type] + " for the "+ LessonStandards[data.type] + " " + data.lessonName;
    }
  )
}
deleteContent(){
  this.communicationsService.executePOSTAPI(APIStandars.deleteLessonContentTeacherAPI,{contentId:this.contentId}).subscribe(
    (data:any)=>{
      this.notify.showSuccess("Success","Google slide has been deleted successfully.")
      this.location.back();
    },(err)=>{
      this.notify.showDanger("Failed","Failed to delete content")
    }
  )
}
getPDFFile(){
  this.communicationsService.executePOSTAPI(APIStandars.fileFetchTeachersAPI,{contentId:this.contentId}).subscribe(
    (data:any)=>{
      console.log("Data is", data)
      this.pdfBase64 = this.b64toBlob("data:application/pdf;base64,"+data)
      this.pdfViewerOnDemand.pdfSrc = this.pdfBase64; // pdfSrc can be Blob or Uint8Array
      this.pdfViewerOnDemand.refresh(); 
      
    }
    )
}

 b64toBlob(dataURI) {

  var byteString = atob(dataURI.split(',')[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'application/pdf' });
}

getContentInfo(){
  this.communicationsService.executePOSTAPI(APIStandars.listContentTeacherAPI,{id: this.contentId}).subscribe(
    (data:any)=>{
      this.lessonName = data[0].lesson[0].lessonName
    },
    (err)=>{

    }
  )
}


}

