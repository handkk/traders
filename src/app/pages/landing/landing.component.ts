import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../main.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  loggedInUser: any;
  cardsList: any[] = [
    {
      name: 'Customers', link: 'customer'
    },
    {
      name: 'Bills', link: 'bill'
    },
    {
      name: 'Collections', link: 'customer-collection'
    }
  ];

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

  ngOnInit(): void {}

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

  selectCard(card: any) {
    const link = '/' + card.link;
    this.router.navigateByUrl(link);
  }

}
