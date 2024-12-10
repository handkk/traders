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
  cardsList: any[] = [];

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
    } else if (this.loggedInUser.username !== 'admin') {
      if (this.loggedInUser.apps.customer.isEdit || this.loggedInUser.apps.customer.isView) {
        this.cardsList.push({
          name: 'Customers', link: 'customer'
        })
      }
      if (this.loggedInUser.apps.bill.isEdit || this.loggedInUser.apps.bill.isView) {
        this.cardsList.push({
          name: 'Bills', link: 'bill'
        })
      }
      if (this.loggedInUser.apps.collection.isEdit || this.loggedInUser.apps.collection.isView) {
        this.cardsList.push({
          name: 'Collections', link: 'customer-collection'
        })
      }
      if (this.loggedInUser.apps.farmer.isEdit || this.loggedInUser.apps.farmer.isView) {
        this.cardsList.push({
          name: 'Farmer', link: 'farmer'
        })
      }
    } else {
      this.cardsList = [{
        name: 'Customers', link: 'customer'
      },{
        name: 'Bills', link: 'bill'
      },{
        name: 'Collections', link: 'customer-collection'
      },{
        name: 'Farmer', link: 'farmer'
      }]
    }
  }

  ngOnInit(): void {
    this.mainService.spinning.emit(false);
  }

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
