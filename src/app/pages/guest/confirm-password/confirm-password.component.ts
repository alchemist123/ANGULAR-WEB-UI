import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {


  password:''
  password1:''
  confirmPasswordForm:any
  token:any

  submitted:boolean = false
  

  constructor(private fb:FormBuilder, private authService:AuthService, private route:ActivatedRoute, private notify: NotificationsService) { }

  ngOnInit(): void {

    this.confirmPasswordForm= this.fb.group({
      password:  ["", [ Validators.required]],
      password1: ["", [Validators.required]]
    })

    
  }

 
  confirmPassword(){
    this.submitted=true

    this.route.params.subscribe(
      (data)=>{
        this.token=data['token']
        console.log(this.confirmPasswordForm.value.password1);
        console.log(this.token);
      
        this.authService.confirmPassword({newPassword:this.confirmPasswordForm.value.password1, token:this.token}).subscribe(
          (data)=>{
          console.log(data);
          this.notify.showSuccess("Success" ,"Password changed successfully")
        
        },
        
        (err)=>{
          this.notify.showDanger("Failed", "Failed to submit data. Please try again")
        }
        )
      }
    )
    
  }
}
