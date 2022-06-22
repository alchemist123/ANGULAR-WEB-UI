import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { ChangeDetectorRef } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-teacher-masterpage',
  templateUrl: './teacher-masterpage.component.html',
  styleUrls: ['./teacher-masterpage.component.css']
})
export class TeacherMasterpageComponent implements OnInit {

  teacherInfo: any;
  isSectionHead: any;
  isClassTeacher: any;
  isHOD: any;
  labMentor: any;
  isSidebarActive = true;
  constructor(private authService: AuthService, private comService:CommunicationService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    // $("#vertical-menu-btn").click(()=>{
    //   $("body").toggleClass("sidebar-enable");
    // })    
    this.getTeacherDetails()
    this.checkSectionHead()
    this.checkIfClassTeacher()
    this.checkIfHOD()
    //this.checkLabMentor()
    this.setActive()

  }

  toggleMenuBar(){
    console.log("data");
   
    this.isSidebarActive = !this.isSidebarActive
  }

  ngAfterViewInit(){
    this.setActive()
  }

  logout(){
      this.authService.logout()
  }

  getTeacherDetails(){
    this.comService.executePOSTAPI(APIStandars.getTeacherDetails,{}).subscribe((data)=>{
        this.teacherInfo = data;
        this.authService.activeUserDetails = data
        
    })
  }

  checkSectionHead(){
    this.comService.executePOSTAPI(APIStandars.checkIfSectionHead,{}).subscribe((data)=>{this.isSectionHead = data["isSectionHead"]})
  }

  checkIfClassTeacher(){
    this.comService.executePOSTAPI(APIStandars.classTeacher.checkIfClassTeacher,{}).subscribe((data)=>{this.isClassTeacher = data["isClassTeacher"]})
  }

  checkIfHOD(){
    this.comService.executePOSTAPI(APIStandars.HOD.checkIfHOD,{}).subscribe(
      (data)=>{
        this.isHOD=data["status"]
        console.log(data);
        
      }
    )
  }

  // checkLabMentor(){
  //   this.comService.executePOSTAPI(APIStandars.ifLabMentor,{}).subscribe(
  //     (data)=>{
  //       console.log(data);
  //       this.labMentor = data["status"]
  //       console.log(this.labMentor);
        
  //     }
  //   )
  // }
  setActive(){
    {
      setTimeout(()=>{
        this.isSidebarActive = false
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
