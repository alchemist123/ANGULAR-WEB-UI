import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-digital-skill-types',
  templateUrl: './digital-skill-types.component.html',
  styleUrls: ['./digital-skill-types.component.css']
})
export class DigitalSkillTypesComponent implements OnInit {

  activeUser: any
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.activeUser = this.authService.activeUser.userType
  }

}
