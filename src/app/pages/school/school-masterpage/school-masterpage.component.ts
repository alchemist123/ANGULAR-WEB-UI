import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
declare var $:any;
@Component({
  selector: 'app-school-masterpage',
  templateUrl: './school-masterpage.component.html',
  styleUrls: ['./school-masterpage.component.css']
})
export class SchoolMasterpageComponent implements OnInit {

  constructor(private authService: AuthService, private comService: CommunicationService) { }
  schollInfo: any;
  schoolName:any
  ngOnInit(): void {
    this.getSchollInfo();
    this.setActive();
  }
  ngAfterViewInit(){
    this.setActive()
  }


  logout(){
      this.authService.logout()
  }
  getSchollInfo(){
    this.comService.executePOSTAPI(APIStandars.getSchoolDetails,{}).subscribe((response)=>{
      this.schollInfo = response
      console.log(this.schollInfo);
      
    })
  }
  setActive(){
    {
      setTimeout(()=>{
      var pgurl = window.location.href.substr(window.location.href
 .lastIndexOf("/")+1);
      $("#sidebar-menu ul li a").each(function(){
             if($(this).attr("href").substr($(this).attr("href").lastIndexOf("/")+1) == pgurl || $(this).attr("href") == '' )
           $(this).addClass("active");
          else{
            $(this).removeClass("active");
          }
      })
   },300)
  }
}

}
