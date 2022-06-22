import { ChangeDetectorRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import ReactGoogleSlides from "react-google-slides";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-google-slide-view',
  templateUrl: './google-slide-view.component.html',
  styleUrls: ['./google-slide-view.component.css']
})
export class GoogleSlideViewComponent implements OnInit {

  @Input() contentId: any
  url = ""
  constructor(private authService:AuthService, public sanitizer: DomSanitizer, private comService: CommunicationService, private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.getContent();
  }
  
  ngOnChanges(): void {
    this.getContent();
  }
  get safeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  getContent(){
    var url = this.authService.activeUser.userType == "student" ? APIStandars.listLessonContentForStudentAPI : APIStandars.listContentTeacherAPI
    if (this.authService.activeUser.userType == "staff")
    url = APIStandars.principal.getContents
    this.comService.executePOSTAPI(url,{id: this.contentId}).subscribe(
    (data:any)=>{
        if(data[0].contentData.includes("/pub"))
          this.url =data[0].contentData.replace("/pub","/embed")
        else
        this.url =data[0].contentData

         setTimeout(()=>{this.ref.detach()},500)
        //  setInterval(()=>{
        //   var iframe: any;
        //   iframe = document.getElementById("slideFrame");
        //   var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
        //   var menubar = innerDoc.getElementById("docs-menubar")
        //   menubar.style.display = "none"
        //  },1000)
         
      },
      (err)=>{
  
      }
    )
  }



  ngAfterViewInit() {
   
  }

}
