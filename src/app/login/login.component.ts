import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;userName;password;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  getValues(){
    this.userName=this.loginForm.get('userName')['value'];
    this.password=this.loginForm.get('password')['value'];
  }
  login(){
    this.getValues();
    console.log(this.userName,this.password);
  }
  signup(){}

}
