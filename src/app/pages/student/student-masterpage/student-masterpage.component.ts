import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import timeGreetings from 'time-greetings';
declare var $: any;
@Component({
  selector: 'app-student-masterpage',
  templateUrl: './student-masterpage.component.html',
  styleUrls: ['./student-masterpage.component.css'],
})
export class StudentMasterpageComponent implements OnInit {
  studentInfo: any;
  currentUser: any;
  teacherName: Object;
  greetingMsg: any;
  previousData: any;
  constructor(
    private authService: AuthService,
    private comService: CommunicationService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.activeUser;
    const date = new Date();
    this.greetingMsg = timeGreetings.timeGreetings(date);
    $('#vertical-menu-btn').click(() => {
      $('body').toggleClass('sidebar-enable');
    });
    this.getUserDetails();
    this.isprevious();
  }

  // toggle(){
  //   $(document).ready(function(){
  //     $("#vertical-menu-btn").click(function(){
  //       $("body").hide();
  //     });
     
  //   });
  // }

  getUserDetails() {
    this.comService
      .executePOSTAPI(APIStandars.getUserDetails, {
        userType: this.authService.activeUser.userType,
      })
      .subscribe((data) => {
        this.studentInfo = data
        console.log(this.studentInfo);
      });
  }

  isprevious() {
    this.comService.executePOSTAPI(APIStandars.isprevious,{}).subscribe(
      (data)=>{
        console.log(data);
        this.previousData = data["status"]
        
      }
    )
  }

  logout() {
    this.authService.logout();
  }

  setActive() {
    {
      setTimeout(() => {
        var pgurl = window.location.href.substr(
          window.location.href.lastIndexOf('/') + 1
        );
        $('#sidebar-menu ul li a').each(function () {
          if (
            $(this)
              .attr('href')
              .substr($(this).attr('href').lastIndexOf('/') + 1) == pgurl ||
            $(this).attr('href') == ''
          )
            $(this).addClass('active');
          else {
            $(this).removeClass('active');
          }
        });
      }, 300);
    }
  }
}
