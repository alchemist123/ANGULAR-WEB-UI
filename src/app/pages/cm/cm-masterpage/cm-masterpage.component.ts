import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
declare var $:any;
@Component({
  selector: 'app-cm-masterpage',
  templateUrl: './cm-masterpage.component.html',
  styleUrls: ['./cm-masterpage.component.css']
})
export class CmMasterpageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    $("#vertical-menu-btn").click(()=>{
      $("body").toggleClass("sidebar-enable");
    })
  }

  logout(){
      this.authService.logout()
  }

}
