import { Component, Input, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
declare var $: any;
@Component({
  selector: 'app-text-editor-view',
  templateUrl: './text-editor-view.component.html',
  styleUrls: ['./text-editor-view.component.css']
})
export class TextEditorViewComponent implements OnInit {
 @Input() contentId;
  constructor(private comService: CommunicationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(){
    var url = this.authService.activeUser.userType == "student" ? APIStandars.listLessonContentForStudentAPI : APIStandars.listContentTeacherAPI
    
    if (this.authService.activeUser.userType == "staff")
    url = APIStandars.principal.getContents
    
    this.comService.executePOSTAPI(url,{id: this.contentId}).subscribe(
      (data:any)=>{
        $("#"+this.contentId).html(data[0].contentData)
      },
      (err)=>{
  
      }
    )
  }

}
