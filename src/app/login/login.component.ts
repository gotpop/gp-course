import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogIn() {
    console.log('Logged in!')
    this.authService.login();
  }

  onLogOut() {
    console.log('Logged out!')
    this.authService.logout();
  }

}
