import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from "../../sharedServices/services/auth.service";

import { LoginModel } from '../../sharedServices/services/models/login.model';

@Component ({
  selector: 'login-section',
  templateUrl: './login.component.html'
})
export class LoginSection implements OnInit {
  loginForm: FormGroup;

  constructor (private route: Router, private formBuilder: FormBuilder, private authService: AuthService) { }


  ngOnInit () {
    this.loginForm = this.formBuilder.group ({
      username: ['eve.holt@reqres.in', [Validators.required]],
      password: ['cityslicka', [Validators.required]]
    });
  }

  loginSubmit (event: any) {
    console.log (event);
  }
  login (username, password) {
    this.authService.savePost({username, password} as LoginModel).subscribe ((post: any) => {
      console.log (post);
      this.route.navigate (['pricing']);
    } );
  }
}