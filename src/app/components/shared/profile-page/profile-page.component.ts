import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  resetPasswordForm: any;
  password = ""
  userDetails: any = [];
  nameOfUser = ""
  constructor(private formBuilder: FormBuilder, private comService: CommunicationService, private authService: AuthService, private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.resetPasswordForm =this.formBuilder.group(
      {
        currentPassword: ['', Validators.required],
        password:['', [Validators.required, Validators.pattern ("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]],
        confirm:['', [Validators.required,  Validators.pattern ("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]]
      }
      )
      this.fetchProfileDetails();
  }

  updatePassword(){
      this.comService.executePOSTAPI(APIStandars.updatePassword,{currentPassword:this.resetPasswordForm.value.currentPassword,newPassword:this.resetPasswordForm.value.password }).subscribe(
        (data) => {
          this.notifications.showSuccess("Success","Your password has been updated.")
        },(err) => {
          this.notifications.showDanger("Error","Password updation failed. Have you entered correct password?")
        }
      )
  }
  get formValue(){
    return this.resetPasswordForm.value.password
  }

  fetchProfileDetails()
  {
      this.comService.executePOSTAPI(APIStandars.getUserDetails,{userType:this.authService.activeUser.userType}).subscribe((data)=>{
          this.userDetails = data
          console.log(this.userDetails);
          
          if(this.userDetails[0].details.length>0){
            if(this.userDetails[0].usertype=='student')
              this.nameOfUser = this.userDetails[0].details[0].studentFirstName + " " +  this.userDetails[0].details[0].studentLastName 
            
            if(this.userDetails[0].usertype=='teacher')
            this.nameOfUser= this.userDetails[0].details[0].teacherFirstName + " " +  this.userDetails[0].details[0].teacherLastName 

            if(this.userDetails[0].usertype=='parent')
            this.nameOfUser=this.userDetails[0].details[0].parentFirstName + " " + this.userDetails[0].details[0].parentLastName

            if(this.userDetails[0].usertype=='school')
            this.nameOfUser=this.userDetails[0].details[0].schoolName 

          }
      },(err)=>{
          this.notifications.showDanger("Failed","Failed to retieve profile details, Please try again.")
      })
  }
  updateProfilePicture($event){
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
        this.comService.executePOSTAPI(APIStandars.uploadProfilePic,{image:reader.result.toString().split(",")[1]}).subscribe((data)=>{
          this.notifications.showSuccess("Success","Your profile picture has been updated")
          this.fetchProfileDetails()

        },(err)=>{
          this.notifications.showDanger("Failed", "Failed to upate profile picture. Please try again.")
        })
    };
  }
  

}
