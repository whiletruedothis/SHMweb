import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import { UserInfo } from './../../models/user.info';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  userInfo: Observable<UserInfo>;
  isLoggedIn = new BehaviorSubject(false);

  constructor(private authService: AuthService, private router: Router) {
    this.userInfo = authService.userInfo;
    this.userInfo
        .map(userInfo => !userInfo.isAnonymous)
        .subscribe(this.isLoggedIn);
  }


  navigateToHome(event) {
    this.router.navigate(['/home']);
  }

  navigateToRegister(event) {
    this.router.navigate(['/register']);
    event.preventDefault();
  }

}
