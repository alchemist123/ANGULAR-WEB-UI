import { Component, OnInit } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-digitall-skill-classes',
  templateUrl: './digitall-skill-classes.component.html',
  styleUrls: ['./digitall-skill-classes.component.css']
})
export class DigitallSkillClassesComponent implements OnInit {

  classList: any= []
  constructor(private comService: CommunicationService) { }

  ngOnInit(): void {
      this.comService.executePOSTAPI(APIStandars.listDigitalSkillClassesForTeacherAPI,{}).subscribe(data => {this.classList = data})
  }


}
