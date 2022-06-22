import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
declare var $: any;
@Component({
  selector: 'app-digitall-skill-submissions',
  templateUrl: './digitall-skill-submissions.component.html',
  styleUrls: ['./digitall-skill-submissions.component.css']
})
export class DigitallSkillSubmissionsComponent implements OnInit {
  assignmentId:any;
  standardId: any;
  divisionId: any;
  submissions: any = [];
  contentData: any;
  remarks: any;
  submissionId:any;
  studentId:any;
  status: any = []
  statusString: any = "";

  constructor(private comService: CommunicationService, private activatedRouter: ActivatedRoute, private notifications:NotificationsService) {
    
   }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.standardId = params['standardId']
      this.divisionId = params['divisionId']
      this.assignmentId = params.assignmentId;
      this.getSubmissions();
      this.getStatus()
    })
  }


  refreshData(){
    this.getSubmissions();
    this.getStatus()

  }

  getSubmissions(){
    this.comService.executePOSTAPI(APIStandars.listDigitalSkillAssignmentSubmissionsForTeacherAPI,{standardId:this.standardId, divisionId: this.divisionId, lessonId:this.assignmentId}).subscribe((data)=>{
        this.submissions = data
    })
  }
  openContentData(data){
    console.log(data)
    this.contentData = data;
    $("#htmlModal").modal('show');
  }
  approve(assignmentId,studentId){
    this.comService.executePOSTAPI(APIStandars.reviewAssignmentForTeacherAPI,{assignmentId: assignmentId, studentId: studentId, remark:"approved", status:1}).subscribe((data)=>{
        this.notifications.showSuccess("Success", "Assignemnt approved succesfully")
        this.refreshData()
    })
  }
  reject(){
    this.comService.executePOSTAPI(APIStandars.reviewAssignmentForTeacherAPI,{assignmentId: this.submissionId, studentId: this.studentId, remark:this.remarks, status:0}).subscribe((data)=>{
        this.notifications.showSuccess("Success", "Assignemnt rejected succesfully")
        $("#rejectionModal").modal('hide');
        this.refreshData()
    })
  }
  rejectionModal(assignmentId,studentId){
    this.submissionId = assignmentId;
    this.studentId = studentId;
    $("#rejectionModal").modal('show');
  }
  getStatus(){
      this.comService.executePOSTAPI(APIStandars.getAssignemntSubmissionStatusForTeacherAPI,{}).subscribe((data)=>{this.status = data
      this.statusString = JSON.stringify(data)
      })
  }

}
