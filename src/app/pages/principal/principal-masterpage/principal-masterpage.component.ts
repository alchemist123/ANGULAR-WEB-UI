import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
declare var $: any;

@Component({
  selector: 'app-principal-masterpage',
  templateUrl: './principal-masterpage.component.html',
  styleUrls: ['./principal-masterpage.component.css']
})
export class PrincipalMasterpageComponent implements OnInit {

  teacherInfo: any;
  principalInfo: any;
  constructor(private authService: AuthService, private comService:CommunicationService) { }

  ngOnInit(): void {
    $("#vertical-menu-btn").click(()=>{
      $("body").toggleClass("sidebar-enable");
    })
    this.getUserDetails()
  }

  logout(){
      this.authService.logout()
  }

  getUserDetails(){
    this.comService.executePOSTAPI(APIStandars.getUserDetails,{userType:this.authService.activeUser.userType}).subscribe((data)=>{
      this.principalInfo=data;
      console.log("da",this.principalInfo);
      
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
