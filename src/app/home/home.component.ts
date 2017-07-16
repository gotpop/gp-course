import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  goLessons() {
    this.router.navigate(['lesson'])
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
