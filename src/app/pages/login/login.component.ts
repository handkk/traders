import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private router: Router,
    private mainService: MainService) {
      if (sessionStorage.getItem('username')) {
        this.router.navigateByUrl('/customer');
      }
    }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
      const username = this.loginForm.value.name;
      const password = this.loginForm.value.password;
      let requestBody = {
        "username": username,
        "password": password
      };
      this.mainService.login(requestBody).subscribe(
        (data: any) => {
          console.log('login success ', data);
          const userinfo = {
            userId: data.userId,
            sessionId: data.sessionId,
            username: data.username
          };
          sessionStorage.setItem('userinfo', JSON.stringify(userinfo));
          this.router.navigateByUrl('/customer');
        },
        err => {
          console.log('login err ', err);
          this.message.create('error', 'invalid credentials');
        }
      );
      // if (username === 'admin' && password === 'admin') {
      //   sessionStorage.setItem('username', this.loginForm.value.name);
      //   this.router.navigateByUrl('/customer');
      // } else {
      //   this.message.create('error', 'invalid credentials');
      // }
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
