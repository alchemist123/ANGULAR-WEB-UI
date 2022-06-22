import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $:any;
@Component({
  selector: 'app-upload-assignment-modal',
  templateUrl: './upload-assignment-modal.component.html',
  styleUrls: ['./upload-assignment-modal.component.css']
})
export class UploadAssignmentModalComponent implements OnInit {
  @Input()  lessonId: string;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter()
  type: string = "0";
  description: any;
  content: any = "";
  fileContent: any = "";
  url: any = "";
  lessonIdToUpdate: string = "";


  constructor(private comService: CommunicationService, private notifications: NotificationsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.lessonIdToUpdate = this.lessonId
  }
  ngOnChanges(){
    this.lessonIdToUpdate = this.lessonId
  }
  submitAssignment(){
        let contentData;
        let media_type;
        let contentType
        switch (this.type){
            case "0":{
              contentData = this.content;
              contentType =2
              media_type = 1;
              break;
            }
            case "1":{
              contentData = this.fileContent
              media_type =2
              contentType = 1
              break
            }
            case "2":{
              contentType = 8
              media_type = 1;
              contentData = this.url;
            }
        }
        let submissionUrl = this.authService.activeUser.userType=="student"?APIStandars.submitDigitalSkillContentForStudentAPI:APIStandars.submitDigitalSkillContentForTeacherAPI
        this.comService.executePOSTAPI(submissionUrl,{contentData, assignmentId: this.lessonIdToUpdate, contentType, media_type, description: this.description }).subscribe(data => {
          this.notifications.showSuccess("Success","Assignment submitted succesfully.")
          $(`#${this.lessonId}_modal`).modal('hide');
          this.onSubmit.emit()

        },
        err=>{
          this.notifications.showDanger("Failed","Failed to upload assignment. Please try again")
        }
        )
  }

  addFile($event){
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.fileContent = reader.result;
    };
  }

  onAnswerUpdate($event){
      this.content = $event;
  }

}
