import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component ({
  selector: 'login-section',
  templateUrl: './login.component.html'
})
export class LoginSection implements OnInit {
  loginForm: FormGroup;

  constructor (private formBuilder: FormBuilder) {
    //
  }

  ngOnInit () {
    this.loginForm = this.formBuilder.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginSubmit (event: any) {
    console.log (event);
  }
}