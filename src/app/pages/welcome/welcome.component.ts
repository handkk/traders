import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    console.log('welcome component');
  }

  logout() {
    sessionStorage.clear();
    this.message.create('success', 'User logged out successfully');
    this.router.navigateByUrl('/login');
  }

}
