import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-student-mark-details',
  templateUrl: './student-mark-details.component.html',
  styleUrls: ['./student-mark-details.component.css']
})
export class StudentMarkDetailsComponent implements OnInit {

  @Input() reportData: any = [];
  constructor(private communicationsService:CommunicationService) { }

  ngOnInit(): void {
  }

  studentDetails(){
    
  }


}
