import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../main.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  forgotPasswordForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder, 
    private message: NzMessageService,
    private router: Router,
    private mainService: MainService
  ) {
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      username: [null, [Validators.required]],
      new_password: [null, [Validators.required]],
      confirm_password: [null, [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    
  }

  submitForm(): void {
    if (this.forgotPasswordForm.valid) {
      const username = this.forgotPasswordForm.value.username;
      const new_password = this.forgotPasswordForm.value.new_password;
      const confirm_password = this.forgotPasswordForm.value.confirm_password;
      let requestBody = {
        "username": username,
        "new_password": new_password,
        "confirm_password": confirm_password
      };
      this.mainService.resetpassword(requestBody).subscribe(
        (data: any) => {
          this.message.create('success', data.message);
          this.router.navigateByUrl('/login');
        },
        err => {
          console.log('login err ', err);
          this.message.create('error', 'Username is not found');
        }
      );
    } else {
      Object.values(this.forgotPasswordForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  loginPage() {
    this.router.navigateByUrl('/login');
  }
}
