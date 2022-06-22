import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-class-subjects',
  templateUrl: './class-subjects.component.html',
  styleUrls: ['./class-subjects.component.css']
})
export class ClassSubjectsComponent implements OnInit {

  standardId: any = ""
  divisionId: any = ""
  subjects: any = []
  @Input() user:any;
  constructor(private activatedRouter: ActivatedRoute, private comService: CommunicationService,  private router:Router, private notifications: NotificationsService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.activatedRouter.params.subscribe((data)=>{
      this.standardId = data.standard
      this.divisionId = data.division
      localStorage.setItem("standardId",this.standardId)
      localStorage.setItem("divisionId",this.divisionId)
      console.log( this.standardId, this.divisionId);
      
      this.getSubjects()
    })
  }

  getSubjects(){
    var  url = ""
    if(this.user=="classTeacher"){
      url = APIStandars.classTeacher.listSubject
    }
    else{
      url = APIStandars.principal.getSubejcts
    }
    this.comService.executePOSTAPI(url,{standardId:this.standardId, divisionId:this.divisionId}).subscribe((data:any)=>{
      this.subjects = data
    })
  }


  onSubjectSelected(id,mode){
      if(this.user=="classTeacher"){
        this.router.navigate([`/teacher/section-chapters/${id}`])
      }
      else{
        if(mode == '0'){
          this.router.navigate([`/principal/unit-view/${id}`])
        }
        else if(mode == '1'){
          this.router.navigate([`/principal/chapter-list/${id}`])
        }
        else if(mode == '2'){
          this.notifications.showConfirm("This subject is not updated.", "Ok", "Cancel")
        }
        else if(!this.subjects["mode"]){
          this.notifications.showConfirm("This subject is not updated.", "Ok", "Cancel")
        }
      }
  }

}
