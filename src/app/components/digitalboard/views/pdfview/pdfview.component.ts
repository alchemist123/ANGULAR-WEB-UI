import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-pdfview',
  templateUrl: './pdfview.component.html',
  styleUrls: ['./pdfview.component.css']
})
export class PDFViewComponent implements OnInit {
  @ViewChild('pdfViewerOnDemand') pdfViewerOnDemand;
  pdfBase64 : any;
  @Input() contentId: any
  url = ""

  constructor(private authService:AuthService, public sanitizer: DomSanitizer, private comService: CommunicationService, private ref: ChangeDetectorRef ) { }
  ngOnInit(): void {
    this.getContent();
  }
  
  ngOnChanges(): void {
    this.getContent();
  }
 safeUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  getContent(){
    var url = this.authService.activeUser.userType == "student" ? APIStandars.listLessonContentForStudentAPI : APIStandars.listContentTeacherAPI
    if (this.authService.activeUser.userType == "staff")
    url = APIStandars.principal.getContents
    
    this.comService.executePOSTAPI(url,{id: this.contentId}).subscribe(
    (data:any)=>{
      
        console.log({PDFData:data})
        this.url =data[0].contentData
        this.pdfViewerOnDemand.pdfSrc = this.url;
        console.log({data, url:this.url ,safeUrl: this.safeUrl()})
        this.pdfViewerOnDemand.refresh();

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





}
