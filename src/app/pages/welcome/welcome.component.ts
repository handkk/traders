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
    this.loggedInUser = this.mainService.getLoggedInUser();
    if (!this.loggedInUser) {
      sessionStorage.clear();
      this.message.create('warning', 'User session expired please login');
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {}

  logout() {
    if (this.loggedInUser) {
      let requestBody = {
        "userId": this.loggedInUser.userId,
        "sessionId": this.loggedInUser.sessionId
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
