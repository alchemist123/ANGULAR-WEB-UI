import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import APIStandars from 'src/app/APIStandards';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  activeUser: any = {}
  activeUserDetails: any = {}
  token:any
  currentUserSuject
  currentId: any;
  schooolId: any;
  divisionId:any;
  standardId:any;
  schoolName: any;
  division: any;
  standard: any;
  otpStatus: any;
  userType: any;
  constructor(private http:HttpClient, private router: Router) {
    this.localSignIn()

    this.currentUserSuject=localStorage.getItem("currentUser")
    
    
   }

   public get currentUserValue(){
     return this.currentUserSuject.value;
   }

 login(cred){
  return this.http.post(APIStandars.loginAPI, cred).pipe(
    map((res)=>{
        let user=res["userType"]
        localStorage.setItem("userType", user)
        console.log("Login success", res)

          this.activeUser = res;
          this.userType = res["userType"]
          console.log( this.userType);   
          this.currentId=res["id"]
          console.log(this.currentId);
          localStorage.setItem("currentId",this.currentId)
          localStorage.setItem("currentUser", JSON.stringify(res))
          this.handleActiveUser()

        },
        (err)=>{

        }
      ))
  }

  resetPassword(email){
    return this.http.post(APIStandars.forgetPassword, email).pipe(
      map((res)=>{
        console.log("Email",res);
    
      },
      (err)=>{

      }
      )
    )
  }

  confirmPassword(newPassword){
    
    return this.http.post(APIStandars.reset_password,newPassword).pipe(
      map((res)=>{
        console.log(res);
        
      },
      (err)=>{

      }
      
      
      )
    )
  }

  classCode(code){
    return this.http.post(APIStandars.classCodeVerify, code).pipe(
      map((res:any)=>{
        console.log(res);
        
        this.schooolId= res.classData[0].schoolId
        this.divisionId= res.classData[0].divisionId
        this.standardId= res.classData[0].standardId
        this.schoolName = res.classData[0].school[0].schoolName
        this.division = res.classData[0].division[0].division
        this.standard = res.classData[0].standard[0].standards
        localStorage.setItem("division", this.division)
        localStorage.setItem("standard",this.standard)
        console.log(this.schoolName, this.division,  this.standard);
        localStorage.setItem("schoolName", this.schoolName)
        console.log(this.schooolId,this.divisionId,this.standardId);
        localStorage.setItem("schoolId", this.schooolId)
        localStorage.setItem("regstandardId", this.standardId)
        localStorage.setItem("regdivisionId",this.divisionId)
        this.router.navigate(["student-register"])
      },
      (err)=>{
        
      })
    )
  }

  generateOtp(email){
    return this.http.post(APIStandars.generateOTP, email).pipe(
      map((res:any)=>{
        console.log(res);
        localStorage.setItem("emailStatus",res.status)
      },
      (err)=>{

      }
      )
    )
  }

  verifyEmail(email, otp){
    return this.http.post(APIStandars.verifyEmail,{email,otp}).pipe(
      map((res)=>{
        console.log(res);
        this.otpStatus = res["status"]
        console.log(this.otpStatus);
        localStorage.setItem("otpStatus", this.otpStatus)
      })
    )
  }

  studentRegistration(schoolId,divisionId,standardId,FirstName,LastName,studEmail,phone,parentMail,gender,dob,admissionNumber,password){
    return this.http.post(APIStandars.studentSelfReg, {schoolId,divisionId,standardId,FirstName,LastName,studEmail,phone,parentMail,gender,dob,admissionNumber,password}).pipe(
      map((res)=>{
        console.log(res);
        
      })
    )
  }

  localSignIn(){
    let loggedInUser = localStorage.getItem("currentUser")
    this.activeUser = JSON.parse(loggedInUser)
    if(this.activeUser){
        console.log("Active User found")
        this.handleActiveUser()
    }
    else{
        console.log("Avtive user not found")
    } 
  }

  handleActiveUser(){
    if(this.activeUser.userType=="school"){
        this.router.navigate(["/school/home"])
    }
    if(this.activeUser.userType=="teacher"){
      this.router.navigate(["/teacher/dashboard"])
    }
    if(this.activeUser.userType=="student"){       
       this.router.navigate(["/student/home"])
    }
    if(this.activeUser.userType=="parent"){
      this.router.navigate(["/parent/home"])
    }
    if(this.activeUser.userType=="cm"){
      this.router.navigate(["/cm/skill-list"])
    }
    if(this.activeUser.userType=="staff"){
      this.router.navigate(["/principal/home"])
    }

  }

  logout(){
    this.activeUser = {}
    localStorage.removeItem("currentUser")
    localStorage.removeItem("HODMODE")
    window.location.href = "/"
  }


}
