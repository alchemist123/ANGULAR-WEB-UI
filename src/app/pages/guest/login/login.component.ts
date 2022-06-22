import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import APIStandars from 'src/app/APIStandards';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import {AuthService} from "../../../services/auth/auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true

  loginForm: any;
  sererResponse = ""
  classCodeForm: any
  classCodes: any;
  constructor(private fb: FormBuilder,private authService: AuthService, private notify: NotificationsService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email ]],
      password:['', Validators.required]
    })

    this.classCodeForm = this.fb.group({
      classCode:['', Validators.required]
    })
    this.classCodes = this.classCodeForm.value
    
    
  }

  login(){
    console.log(this.loginForm.value);
    
    this.sererResponse = ""
    //console.log("login with", this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(
      (data)=>{
        
        let type = data["userType"]
        console.log(type);
        
      },(err)=>{
        this.sererResponse = "Invalid username or password. Please try again."
      }
    )

  }

  classCode(){
    let formValue = this.classCodeForm.value
    console.log(formValue);
    this.authService.classCode({classCode:formValue.classCode}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
      },(err)=>{
        this.notify.showDanger("Failed", "Class code not exist.")
      }
    )
  }

  

}
