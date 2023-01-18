import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  
  constructor(private loginService:LoginService){}

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.login(email, password);

  }
}
