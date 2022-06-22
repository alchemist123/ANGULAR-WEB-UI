import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from "../../../services/communication/communication.service"
import APIStandards from "../../../APIStandards"
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-school-register',
  templateUrl: './school-register.component.html',
  styleUrls: ['./school-register.component.css']
})
export class SchoolRegisterComponent implements OnInit {

  countries = []
  states = []
  registrationForm: any;
  passwordWrongMsg = ""
  constructor(private comService: CommunicationService, private fb: FormBuilder, private notifications: NotificationsService, private authServices: AuthService) {

    this.comService.executeGETAPI(APIStandards.countriesAPI,{}).subscribe(
      (data:any)=>{
          this.countries = data
      },
      (err)=>{

      })

   }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      schoolName:['', Validators.required],
      pincode:['', [Validators.required]],
      Address:['', Validators.required],
      country:['', Validators.required],
      state:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    }
    )
  }

  countryChange(country){
    console.log(country)
    var countryId = ""
    this.countries.forEach((ele)=>{
      if(ele.country_name == country)
       countryId = ele.country_id
    })
    this.comService.executeGETAPI(APIStandards.satateAPI,{countryId}).subscribe(
      (data:any)=>{
        this.states = data
      }
    )
  }

  register(){
    if(this.registrationForm.value.password == this.registrationForm.value.confirmPassword){
      this.passwordWrongMsg= ""
     console.log(this.registrationForm.value)
     this.comService.executePOSTAPI(APIStandards.schoolRegisterAPI, this.registrationForm.value).subscribe(
      (data)=>{
        console.log("Registration successfull")
        this.notifications.showSuccess("Success","Your school has been registered successfully. Redireting to home page.")
        this.authServices.login(this.registrationForm.value)
      },
      (err)=>{
        this.notifications.showDanger("Failed", "School registration has failed. Please try again later.")
      }
      )
    }
    else{
      this.passwordWrongMsg = "Passwords donot match, Please try again."

    }
  }





}
