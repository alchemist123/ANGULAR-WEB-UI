import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils/utils.service';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import  timeGreetings  from "time-greetings";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentList: any = []
  greetingMsg: any;
  ParentInfo: any;
  text: any;
  constructor(private router: Router,private utilService:UtilsService, private authService: AuthService, private comService: CommunicationService) { }

  ngOnInit(): void {
    const date = new Date();
    this.greetingMsg = (timeGreetings.timeGreetings(date));
    this.utilService.resetParentPath()
    this.utilService.updatePathName(location.pathname, "Reports");
    this.getStudentDetails()
    this.getUserDetails()
  }

  getStudentDetails(){
      this.comService.executePOSTAPI(APIStandars.getStudentListForParentAPI,{}).subscribe((data:any)=>{
        
        data[0].students.forEach((element)=>{
          var studentData = {}
          studentData["firstName"] = element.studentFirstName;
          studentData["lastName"] = element.studentLastName
          var moreData =  data[0].moreData.filter((ele)=>ele._id==element.userId)[0] 
          studentData["profilePic"] = moreData.profilePic
          studentData["email"] = moreData.email
          studentData["_id"] = moreData._id
          var assignStudent = data[0].assignStudent.filter((ele)=>ele.studentId==element.userId)
          studentData["standardId"] = assignStudent[0].standardId
          studentData["divisionId"] = assignStudent[0].divisionId
          var standard = data[0].standard.filter((ele)=>ele._id==assignStudent[0].standardId)[0].standards
          var division = data[0].division.filter((ele)=>ele._id==assignStudent[0].divisionId)[0].division
          studentData["division"] = division
          studentData["standard"] = standard
          this.studentList.push(studentData)
          
        })
        if(this.studentList.length == 0){
          this.text = "No data to display"
        }
        
      })
  }

  selectStudent(i){
    this.utilService.updatePathName('/parent/subject-list/'+this.studentList[i]._id+"/"+this.studentList[i].divisionId+"/"+this.studentList[i].standardId, this.studentList[i].firstName +" "+ this.studentList[i].lastName);
    this.router.navigate(['/parent/subject-list/'+this.studentList[i]._id+"/"+this.studentList[i].divisionId+"/"+this.studentList[i].standardId])
  }

  getUserDetails(){
    this.comService.executePOSTAPI(APIStandars.getUserDetails,{userType:this.authService.activeUser.userType}).subscribe((data)=>{
      this.ParentInfo=data;
      console.log(this.ParentInfo);
      
    })
  }
}
