import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.css']
})
export class StudentSubjectsComponent implements OnInit {

  subjectList = []
  textData: any;
  constructor(private authService: AuthService, private communicationsService: CommunicationService, private router: Router, private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.getSubjects();
    localStorage.setItem("previousData","true")
  }


getSubjects(){
  this.subjectList = []
  this.communicationsService.executePOSTAPI(APIStandars.getSubjectsForStudentAPI,{}).subscribe((data:any)=>{
    this.subjectList = data
    if(data.length == 0){
      this.textData = "Yet to publish, Contact your teacher."
    }
    console.log(this.subjectList);
    
  })
}



loadChapters(id,mode){
  if(mode == '0'){
    this.router.navigate(["/student/unit/"+id])
  }
  else if(mode == '1'){
    this.router.navigate(["/student/chapters/"+id])
  }
  else if(mode == '2'){
    this.notifications.showConfirm("You teacher is not updated this subject.", "Ok", "Cancel")
  }
  else if(!this.subjectList["mode"]){
    this.notifications.showConfirm("You teacher is not updated this subject.", "Ok", "Cancel")
  }
  
}


}
