import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm;userName;mobile;email;password;confirmPassword;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userName': new FormControl('', [Validators.required]),
      'mobile': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
      'confirmPassword': new FormControl('', [Validators.required])
    });
  }
  getValues(){
    this.userName=this.signUpForm.get('userName')['value'];
    this.mobile=this.signUpForm.get('mobile')['value'];
    this.email=this.signUpForm.get('email')['value'];
    this.password=this.signUpForm.get('password')['value'];
  }
  signup(){
    this.getValues();
    console.log(this.userName,this.mobile,this.email,this.password);
    let data = {
      "username": this.userName,
	    "password": this.password,
	    "email": this.email,
	    "phone": this.mobile
    };
    this.api.signUp(data).subscribe(data=>{if(data==true){alert("Registration Successfull");}},
    error=>{console.log(error);});
  }

}
