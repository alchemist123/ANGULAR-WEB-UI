import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-registration-otp-modal',
  templateUrl: './registration-otp-modal.component.html',
  styleUrls: ['./registration-otp-modal.component.css']
})
export class RegistrationOtpModalComponent implements OnInit {

  otpForm:any
  email:any
  constructor(private fb:FormBuilder, private authService: AuthService,  private notify: NotificationsService, private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public val: any) { 
      console.log(val.email);
      this.email=val.email
      
    }

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      otp: ["",[Validators.required]]
    })
  }

  emailVerify(){
   let formValue = this.otpForm.value
   console.log(formValue);
   
     this.authService.verifyEmail(this.email,formValue.otp).subscribe(
       (data)=>{
         console.log(data);
         this.notify.showSuccess("Success","Your Email Id successfully verified.")
        this.dialog.closeAll()
       },
       (err)=>{
        this.notify.showDanger("Failed","Failed to complete operation")
      }
     )
  }

}


