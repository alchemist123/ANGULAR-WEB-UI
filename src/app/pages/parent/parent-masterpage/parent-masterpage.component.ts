import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import  timeGreetings  from "time-greetings";
declare var $: any;
@Component({
  selector: 'app-parent-masterpage',
  templateUrl: './parent-masterpage.component.html',
  styleUrls: ['./parent-masterpage.component.css']
})
export class ParentMasterpageComponent implements OnInit {

  currentUser:any;
  greetingMsg: any;
  parentInfo: any;
  constructor(private authService: AuthService, private comService: CommunicationService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.activeUser
    const date = new Date();
    this.greetingMsg = (timeGreetings.timeGreetings(date));
    $("#vertical-menu-btn").click(()=>{
      $("body").toggleClass("sidebar-enable");
    })
    this.getUserDetails()
  }
  logout(){
    this.authService.logout()
}

getUserDetails() {
  this.comService
    .executePOSTAPI(APIStandars.getUserDetails, {
      userType: this.authService.activeUser.userType,
    })
    .subscribe((data) => {
      this.parentInfo = data
      console.log(this.parentInfo);
    });
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
