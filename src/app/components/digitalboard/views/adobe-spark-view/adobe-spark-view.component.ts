import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-adobe-spark-view',
  templateUrl: './adobe-spark-view.component.html',
  styleUrls: ['./adobe-spark-view.component.css']
})
export class AdobeSparkViewComponent implements OnInit {

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
       
        this.url =data[0].contentData
        setTimeout(()=>{this.ref.detach()},500)
         
      },
      (err)=>{
          
      }
    )
  }



  ngAfterViewInit() {
   
  }

}