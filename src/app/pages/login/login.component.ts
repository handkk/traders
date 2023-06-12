import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private router: Router) {
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
      this.message.create('success', `${this.loginForm.value.name} Login success`);
      sessionStorage.setItem('username', this.loginForm.value.name);
      this.router.navigateByUrl('/customer');
      // this.loginForm.controls['name'].reset();
      // this.loginForm.controls['phoneNumber'].reset();
      // this.loginForm.controls['address'].reset();
      // this.loginForm.controls['notes'].reset();
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
