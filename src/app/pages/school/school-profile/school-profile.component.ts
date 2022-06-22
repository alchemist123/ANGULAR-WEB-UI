import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.component.html',
  styleUrls: ['./school-profile.component.css']
})
export class SchoolProfileComponent implements OnInit {

  currentPassword=''
  password=''
  confirm=''

  resetpasswordForm:any

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.resetpasswordForm=this.fb.group({
      currentPassword:["",Validators.required],
      password:["",[Validators.required,Validators.pattern ("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]],
      confirm:["",[Validators.required,Validators.pattern ("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]]
    })
  }

  get formValue(){
    return this.resetpasswordForm.value.password
  }

}
