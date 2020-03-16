import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;userName;password;token;
  currentToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6NjIsImlhdCI6MTU4NDM3MzE3NCwiZXhwIjoxNTg0NDU5NTc0fQ.UDaiX2Inf1O4TDryWq7TM2Ppzxz20O4q3wu-J5J5teo';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    sessionStorage.setItem("token",this.currentToken);
  }

  getValues(){
    this.userName=this.loginForm.get('userName')['value'];
    this.password=this.loginForm.get('password')['value'];
  }
  login(){
    this.getValues();
    console.log(this.userName,this.password);
    let data = {
      "username": this.userName,
	    "password": this.password
    };
    this.api.login(data).subscribe(data=>{
      this.api.getToken(data['token']).subscribe(data=>{sessionStorage.setItem("token",data['token']);},
      error=>{console.log(error);});
    },error=>{console.log(error);});
  }
  signup(){}

}
