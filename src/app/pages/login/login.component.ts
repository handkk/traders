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
      let userinfo: any = sessionStorage.getItem('userinfo');
      if (!userinfo) {
        sessionStorage.clear();
        this.message.create('warning', 'User session expired please login');
        this.router.navigateByUrl('/login');
      } else {
        this.router.navigateByUrl('/main')
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
      const username = this.loginForm.value.name;
      const password = this.loginForm.value.password;
      let requestBody = {
        "username": username,
        "password": password
      };
      this.mainService.spinning.emit(true);
      this.mainService.login(requestBody).subscribe(
        (data: any) => {
          const userinfo = {
            userId: data.userId,
            sessionId: data.sessionId,
            username: data.username,
            name: data.name,
            apps: data.apps
          };
          sessionStorage.setItem('userinfo', JSON.stringify(userinfo));
          this.router.navigateByUrl('/main');
        },
        err => {
          console.log('login err ', err);
          this.message.create('error', 'invalid credentials');
          this.mainService.spinning.emit(false);
        }
      );
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  forgotPassword() {
    this.router.navigateByUrl('/forgotpassword');
  }

}
