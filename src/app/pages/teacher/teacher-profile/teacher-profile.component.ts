import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  currentPassword=''
  password=''
  confirm=''

  resetPasswordForm:any
  teacherInfo: any;

  constructor(private fb:FormBuilder, private authService: AuthService, private comService:CommunicationService) { }

  ngOnInit(): void {

    this.resetPasswordForm=this.fb.group({
      currentPassword:['', Validators.required],
      password:['',[Validators.required, Validators.pattern ("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]],
      confirm:['',[Validators.required, Validators.pattern ("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]]
    })
    this.getTeacherDetails()
  }

  get formValue(){
    return this.resetPasswordForm.value.password
  }


  getTeacherDetails(){
    this.comService.executePOSTAPI(APIStandars.getUserDetails,{userType:this.authService.activeUser.userType}).subscribe((data)=>{
        this.teacherInfo = data;
        console.log(this.teacherInfo);
        
    })
  }

  updatePassword(){
    if(this.resetPasswordForm.valid){
      let currentPassword=this.resetPasswordForm.value.currentPassword;
      let password=this.resetPasswordForm.value.password;
      let confirm=this.resetPasswordForm.value.confirm
    }
    else{
      alert("Invalid")
    }
  }

}
