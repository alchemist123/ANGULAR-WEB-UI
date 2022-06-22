import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import APIStandars from 'src/app/APIStandards';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { RegistrationOtpModalComponent } from '../registration-otp-modal/registration-otp-modal.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  
  parse: {
    dateInput: 'LL',
},
display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
},

};

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class StudentRegisterComponent implements OnInit {
 
  hide=true
  hide2=true
  @Input() studentRegister:any = "";
  passwordWrongMsg:any
  emailvalidate:any
  registerForm:any
  terms:false
  email: any;
  emailForm: any;
  testForm:any
  schoolId:any
  division: any;
  schoolName: any;
  standard: any;
  otpStatus:any
  otpStatuss: any;
  standardId: any;
  divisionId: any;
  minDate = new Date(1998, 1, 12);
  maxDate = new Date(2020, 3, 5)
  status: any;
  constructor(private fb: FormBuilder, private dialog:MatDialog, private notify: NotificationsService, private authService: AuthService, private comServices:CommunicationService, private dateAdapter: DateAdapter<Date> ) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnChange():void{
    this.otpStatus = localStorage.getItem("otpStatus")
    console.log(this.otpStatus);
    
    this.initForms()
  }

  ngOnInit(): void {
  
    this.initForms()
    this.schoolId = localStorage.getItem("schoolId")
    this.standardId = localStorage.getItem("regstandardId")
    this.divisionId = localStorage.getItem("regdivisionId")
    this.schoolName = localStorage.getItem("schoolName")
    this.division = localStorage.getItem("division")
    this.standard = localStorage.getItem("standard")
    this.otpStatus = localStorage.getItem("otpStatus")
    console.log(this.otpStatus);
    
  }

  initForms(){
    if(this.studentRegister==""){
      this.studentRegister={
        fName:"",
        mName:"",
        lName:"",
        email:"",
        mobileNumber:"",
        parentemail:"",
        gender:"",
        dob:"",
        admissionnumber:"",
        password:"",
        repassword:"",
        terms:""
      }
    }

    this.registerForm = this.fb.group({
      fName:[this.studentRegister.fName,Validators.required],
      mName:[this.studentRegister.mName],
      lName:[this.studentRegister.lName, Validators.required],
      email:[this.studentRegister.email, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobileNumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      parentemail:[this.studentRegister.parentemail, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender:[this.studentRegister.gender, Validators.required],
      dob:[this.studentRegister.dob, Validators.required],
      admissionnumber:[this.studentRegister.admissionnumber, Validators.required],
      password:[this.studentRegister.password, Validators.required],
      repassword:[this.studentRegister.repassword, Validators.required],
      terms:[this.studentRegister.terms]
    })

  }
  get f(){  
    return this.registerForm.controls;  
  }
 
  emailRegistrationStudent(){
    
    let formvalue = this.registerForm.value.email
    console.log(formvalue);

   this.authService.generateOtp({email:formvalue}).subscribe(
     (data:any)=>{
       console.log(data);
       this.notify.showSuccess("Success","Otp send to your given email-id")
      
     },
     (err)=>{
      if(err.status==500){
        this.notify.showDanger("Failed","This email-id already exists")
       }
       
        this.notify.showDanger("Failed","Failed to complete operation")
      
    }
   )
     
        const dialogRef = this.dialog.open(RegistrationOtpModalComponent, {
          data:{email:formvalue}
        })
        dialogRef.afterClosed().subscribe(
         (data)=>{
           this.otpStatus=localStorage.getItem("otpStatus")
           console.log(this.otpStatus);
         }
       ) 
  }

  emailRegistrationParent(){
    
    
    let formValue = this.registerForm.value.parentemail
    console.log(formValue);
    this.authService.generateOtp({email:formValue}).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","")
      },
      (err)=>{
        if(err.status==500){
          this.notify.showDanger("Failed","This email-id already exists")
         }
        
          this.notify.showDanger("Failed","Failed to complete operation")
        
       
      }
    )
    const dialogRef = this.dialog.open(RegistrationOtpModalComponent, {
      data:{email:formValue}
    })
    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.otpStatuss=localStorage.getItem("otpStatus")
        console.log(this.otpStatus);
      }
    ) 
    
  }

  registerStudent(){
    localStorage.removeItem("otpStatus")
    if(this.registerForm.value.password == this.registerForm.value.repassword){
      this.passwordWrongMsg=""
    let gen = this.registerForm.value.gender
    console.log(gen);
    
    let formValue = this.registerForm.value
    this.authService.studentRegistration(this.schoolId,this.divisionId,this.standardId, formValue.fName, formValue.lName, formValue.email, formValue.mobileNumber, formValue.parentemail, formValue.gender, formValue.dob, formValue.admissionnumber, formValue.password).subscribe(
      (data)=>{
        console.log(data);
        this.notify.showSuccess("Success","Your account has been registered successfully.") 
        //this.registerForm.reset();
       
        //setTimeout(() => {this.domDocument.location.reload()}, 2000); 
        window.location.reload();
      },
      (err)=>{
        this.notify.showDanger("Failed","Failed to complete operation")
      }
    )
   }
   else{
    this.passwordWrongMsg = "Passwords do not match, Please try again."
   }
   
  }
  
  
}
