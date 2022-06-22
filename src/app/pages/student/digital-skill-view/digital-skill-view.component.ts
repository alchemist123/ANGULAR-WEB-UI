import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-digital-skill-view',
  templateUrl: './digital-skill-view.component.html',
  styleUrls: ['./digital-skill-view.component.css']
})
export class DigitalSkillViewComponent implements OnInit {

  lessonId: string;
  contents:any = [];
  currentUser: any;
  constructor(private authService: AuthService, private activatedRouter: ActivatedRoute, private comService: CommunicationService) { 
this.activatedRouter.params.subscribe((params) => {
  this.lessonId = params['lessonId']
  this.refreshContents()

})
this.currentUser = this.authService.activeUser.userType;
    
  }

  ngOnInit(): void {
  }

  refreshContents(){
    this.comService.executePOSTAPI(APIStandars.listDigitalSkillContent,{}).subscribe((response)=>{
        this.contents = response
    })
  }

}
