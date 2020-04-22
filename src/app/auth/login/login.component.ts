import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Login} from "../../sharedServices/services/models/Login";
import {AuthService} from "../../sharedServices/services/auth.service";

@Component ({
  selector: 'login-section',
  templateUrl: './login.component.html'
})
export class LoginSection implements OnInit {
  loginForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private authService: AuthService) { }


  ngOnInit () {
    this.loginForm = this.formBuilder.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginSubmit (event: any) {
    console.log (event);
  }
   login(username, password) {
  this.authService.savePost({username, password} as Login).subscribe(post => {
        console.log(post);});
  }
}