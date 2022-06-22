import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { StudentDeactivateConfirmationModalComponent } from '../student-deactivate-confirmation-modal/student-deactivate-confirmation-modal.component';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-class-dashboard',
  templateUrl: './class-dashboard.component.html',
  styleUrls: ['./class-dashboard.component.css']
})
export class ClassDashboardComponent implements OnInit {
  show = false;
  preAssesmentData: any;
  postAssesmentData:any;
  underStandingData: any;
  className:any;
  preAssesmentIntegratedData:any = [];
  postAssementIntegratedData: any = [];
  understandingIntegratedData: any = [];
  activityAssessmentData: any = [];
  activityIntegratedData: any = [];
  view: any[] = [700, 400];
  colorScheme = {
    domain: ['#00e676','#FF0266', '#ffeb3b', '#C7B42C', '#AAAAAA']
  };
  classCode: void;
  displayedColumns: string[] = ['No','studentFirstName','admissionNumber', 'dob', 'mobileNumber','Deactivate']
  studentId: any;
  dataValue:any
  dataSource:any
  query:any
  
  constructor(private comService:CommunicationService, private dialog:MatDialog,  private notify: NotificationsService) { }

  ngOnInit(): void {
    this.getClassName()

    this.comService.initSocket(1)

    setTimeout(()=>{
      this.comService.reportDataInitForTopLevel()
      },3000)
     
      this.comService.listen("pre_listener").subscribe(data => {
        console.log({data});
        this.getPreAssementData(data)
      })
  
      this.comService.listen("post_listener").subscribe(data => {
        console.log({data});
        this.getPostAssementData(data)
      })
  
      this.comService.listen("self_listener").subscribe(data => {
        console.log({data});
        this.getUnderstandingData(data)
      })
  
      this.comService.listen("act_listener").subscribe(data=>{
        console.log({Actdata:data});
        this.getIntegratedActivityData(data)
      })

      this.listClassStudent()
  }

 
  getPreAssementData(data){
   
    var preAssesmentSum = this.sumObjectsByKey(...data)
    this.preAssesmentIntegratedData = [{"name": "Correct answers", "value":preAssesmentSum.attend},
                                       {"name": "Wrong answers", "value":preAssesmentSum.worong}

                                      ]
                                      
                                      this.show = true


}

getPostAssementData(data){
    var postSum = this.sumObjectsByKey(...data)
    this.postAssementIntegratedData = [{"name": "Correct answers", "value":postSum.attend},
                                       {"name": "Wrong answers", "value":postSum.worong}

                                      ]
                                      console.log("integrated Post", this.preAssesmentIntegratedData)
                            
                                      this.show = true
}

getUnderstandingData(data){
    var underSum = this.sumObjectsByKey(...data)
    this.understandingIntegratedData = [{"name": "Correct Answers", "value":underSum.correct},
                                       {"name": "Corrected Answers", "value":underSum.corrected},
                                       {"name": "Pending Self Review", "value":underSum.ans_for_review}
                                      ]                              
                                      this.show = true

}

getIntegratedActivityData(data){
    var activitySum = this.sumObjectsByKey(...data)
    console.log({activitySum})
    this.activityIntegratedData = [{"name" : "Total Activity", "value" : activitySum.total_activity},
                                   {"name" : "Completed Activity", "value" : activitySum.total_completions}
                                  ]
                                  this.show = true
}



sumObjectsByKey(...objs) {
  return objs.reduce((a, b) => {
    for (let k in b) {
      if (b.hasOwnProperty(k) && !isNaN(b[k])) 
        a[k] = (parseInt(a[k]) || 0) + parseInt(b[k]);
       
    }
    return a;
  }, {});
}


getClassName(){
  this.comService.executePOSTAPI(APIStandars.classTeacher.checkIfClassTeacher,{}).subscribe((data:any)=>{
      this.className = data;
      this.classCode = data["data"]
      console.log("data",this.classCode);
      
  })
}

listClassStudent(){
  this.comService.executePOSTAPI(APIStandars.classTeacher.listStudents,{}).subscribe(
    (data)=>{
      console.log(data);
      this.dataSource = data
    }
  )
}

selectStudent(element){
  this.studentId = element["userId"]
  console.log(this.studentId);
  this.deactivate()
}

deactivate(){
  var dialogRef = this.dialog.open(StudentDeactivateConfirmationModalComponent,{
    data:{studentId:this.studentId}
  })
  dialogRef.afterClosed().subscribe(
    (data)=>{
      this.listClassStudent()
    }
  )
}

copiedMsg(){
  this.notify.showSuccess("Copied","")
}



// removeStudent(){
//   this.comService.executePOSTAPI(APIStandars.classTeacher.removeStudent,{studentId:this.studentId}).subscribe(
//     (data)=>{
//       this.listClassStudent()
//       console.log(data);
      
//     }
//   )
// }

}
