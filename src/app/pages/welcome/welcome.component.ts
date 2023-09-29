import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../main.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loggedInUser: any;

  constructor(
    private router: Router,
    private message: NzMessageService,
    private mainService: MainService
  ) {
    let userinfo: any = sessionStorage.getItem('userinfo');
    if (!userinfo) {
      sessionStorage.clear();
      this.message.create('warning', 'User session expired please login');
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    let userinfo: any = sessionStorage.getItem('userinfo');
    const user = JSON.parse(userinfo);
    this.loggedInUser = user;
  }

  logout() {
    let userinfo: any = sessionStorage.getItem('userinfo');
    const user = JSON.parse(userinfo);
    if (user) {
      let requestBody = {
        "userId": user.userId,
        "sessionId": user.sessionId
      };
      this.mainService.logout(requestBody).subscribe(
        (data: any) => {
          sessionStorage.clear();
          this.message.create('success', 'User logged out successfully');
          this.router.navigateByUrl('/login');
        },
        err => {
          console.log('login err ', err);
          this.message.create('error', 'invalid credentials');
          sessionStorage.clear();
          this.router.navigateByUrl('/login');
        }
      );
    } else {
      sessionStorage.clear();
      this.router.navigateByUrl('/login');
    }
  }

}
