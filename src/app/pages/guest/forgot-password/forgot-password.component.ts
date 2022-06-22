import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  passwordForm:any
  email=''
  sererResponse:any
  res:any

  constructor(private fb:FormBuilder, private authService:AuthService, private notify: NotificationsService) { }

  ngOnInit(): void {

    this.passwordForm = this.fb.group({
     email:['',[Validators.required, Validators.email]]
    })
  }

  resetPassword(){
  
   this.authService.resetPassword(this.passwordForm.value).subscribe(
     (data)=>{
    
    console.log(data);
    this.notify.showSuccess("Success" ,"A link is send to the given mail")
    

   },(err)=>{
    console.log(err);
    this.notify.showDanger("Error","Invalid Email-ID")
  }
   
   
   )

  }

}
