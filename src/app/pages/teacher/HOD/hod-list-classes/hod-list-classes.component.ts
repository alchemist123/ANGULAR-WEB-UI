import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-hod-list-classes',
  templateUrl: './hod-list-classes.component.html',
  styleUrls: ['./hod-list-classes.component.css']
})
export class HodListClassesComponent implements OnInit {
  classList: any;
  lessonId: any;
  standardId: any;
  divisionId: any;

  constructor(private comServices:CommunicationService, private activateRouter: ActivatedRoute, private router: Router,  private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      (data)=>{
            this.lessonId=data["id"]
            this.standardId=data["standardId"]
            this.divisionId=data["divisionId"]
            localStorage.setItem("standardId",this.standardId)
            localStorage.setItem("divisionId",this.divisionId)
            console.log(this.divisionId);
            
      }
    )
      this.hodlistClass()
    
    
  }

  hodlistClass(){
    this.comServices.executePOSTAPI(APIStandars.HOD.listClass,{teacherId:this.lessonId}).subscribe(
      (data)=>{
        this.classList = data
        console.log(data);
        
      }
    )
  }

  loadChapters(id,mode){
    if(mode == '0'){
      this.router.navigate(["/teacher/hod-list-lesson/"+id])
    }
    else if(mode == '1'){
      this.router.navigate(["/teacher/lesson-sub-level/"+id])
    }
    else if(mode == '2'){
      this.notifications.showConfirm("This subject is not updated.", "Ok", "Cancel")
    }
    else if(!this.classList["mode"]){
      this.notifications.showConfirm("This subject is not updated.", "Ok", "Cancel")
    }
    
  }

}
