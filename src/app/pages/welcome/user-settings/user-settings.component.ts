import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  validateForm!: UntypedFormGroup;
  usersData: any[] = [];
  sort = ['ascend'];
  listOfColumns = [
    {
      name: 'Name'
    },
    {
      phoneNumber: 'Phone Number'
    },
    {
      address: 'Address'
    },
    {
      notes: 'Note'
    }
  ];
  index = 1;
  total = 0;
  pageSize = 10;
  loading = true;
  edit = false;
  userId: string = '';
  loggedInUser: any;
  isVisible: boolean = false;
  userPermissions: any = {
    'customer': { 'isEdit': false, 'isView': false },
    'bill': { 'isEdit': false, 'isView': false },
    'collection': { 'isEdit': false, 'isView': false },
    'farmer': { 'isEdit': false, 'isView': false },
    'vegetable': { 'isEdit': false, 'isView': false },
    'billprint': { 'isView': false },
    'statement': { 'isView': false }
  };
  username: string = '';

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private mainService: MainService, private router: Router
    ) {
      let userinfo: any = sessionStorage.getItem('userinfo');
      if (!userinfo) {
        sessionStorage.clear();
        this.message.create('warning', 'User session expired please login');
        this.router.navigateByUrl('/login');
      }
    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null],
      email: [null],
      address: [null],
      notes: [null]
    });
    this.loggedInUser = this.mainService.getCurrentUser();
    this.getAllUsers();
  }

  getAllUsers() {
    this.loading = true;
    document.getElementById('userFullName')?.focus();
    this.mainService.getAllUsers().subscribe(
      (data: any) => {
        const users = data.data;
        this.usersData = users;
        const adminIndex = this.usersData.findIndex(user => user.username === 'admin');
        this.usersData.splice(adminIndex, 1);
        // const decryptPwd = this.mainService.decrypt(this.usersData[0].password);
        this.total = data.total - 1;
        this.loading = false;
      },
      err => {
        console.log('get users err ', err);
        this.usersData = [];
        this.loading = false;
      }
    );
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      let requestBody: any = {
        name: this.validateForm.value.name,
        phone_number: this.validateForm.value.phoneNumber ? parseInt(this.validateForm.value.phoneNumber) : null,
        address: this.validateForm.value.address,
        notes: this.validateForm.value.notes,
        email: this.validateForm.value.email
      };
      if (!this.edit) {
        requestBody['password'] = this.validateForm.value.password;
        requestBody['username'] = this.validateForm.value.username;
      }
      if (this.edit) {
        this.mainService.updateUser(this.userId, requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} user updated Successfully`);
            this.reset();
            this.loading = true;
            this.edit = false;
            this.getAllUsers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.getAllUsers();
          }
        );
      } else {
        this.mainService.createUser(requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `User created successfully`);
            this.reset();
            this.loading = true;
            this.getAllUsers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.message.create('success', err.error.message);
          }
        );
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  editUser(data: any) {
    this.edit = true;
    this.userId = data._id;
    this.validateForm.controls['phoneNumber'].setValue(data.phone_number);
    this.validateForm.controls['name'].setValue(data.name);
    this.validateForm.controls['notes'].setValue(data.notes);
    this.validateForm.controls['address'].setValue(data.address);
    this.validateForm.controls['username'].setValue(data.username);
    this.validateForm.controls['email'].setValue(data.email);
    this.validateForm.controls['password'].setValue(data.password);
  }

  confirm(id: any) {
    this.mainService.removeUser(id).subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.success) {
          this.message.create('success', data.message);
          this.getAllUsers();
        }
      },
      err => {
        console.log('get customers err ', err);
        this.loading = false;
      }
    );
  }

  cancel() {}

  public exportJsonAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public exportTableAsExcelFile(table: HTMLElement, excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + new Date().getTime() + EXCEL_EXTENSION);
  }

  exportToExcel() {
    let data: any = [];
    this.usersData.forEach(f => {
      data.push({
        'Name': f.name,
        'Phone Number': f.phone_number,
        'Email': f.email,
        'Address': f.address,
        'Notes': f.notes
      })
    })
    this.exportJsonAsExcelFile(data, 'users');
  }

  reset() {
    this.validateForm.controls['name'].reset();
    this.validateForm.controls['phoneNumber'].reset();
    this.validateForm.controls['address'].reset();
    this.validateForm.controls['notes'].reset();
    this.validateForm.controls['username'].reset();
    this.validateForm.controls['email'].reset();
    this.validateForm.controls['password'].reset();
    this.edit = false;
  }

  onPageSizeChange(event: any) {
    this.pageSize = event;
    this.getAllUsers();
  }

  onPageChange(event: any) {
    this.index = event;
    this.getAllUsers();
  }

  handleOk(): void {
    this.mainService.spinning.emit(true);
    this.mainService.updateUserPermissions({'apps': this.userPermissions, 'id': this.userId}).subscribe(
      (data: any) => {
        this.isVisible = false;
        this.mainService.spinning.emit(false);
        this.message.create('success', 'User Permissions updated');
        this.getAllUsers();
      },
      err => {
        console.log('get users err ', err);
        this.mainService.spinning.emit(false);
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.message.create('error', err.error.message);
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
        this.message.create('error', err.error.message);
      }
    );
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  roles(data: any) {
    this.isVisible = true;
    this.userId = data._id;
    this.userPermissions = data.apps ? data.apps : this.userPermissions;
    this.username = data.name;
  }

  permissionsUpdate(type: string) {
    if (type === 'customer' && this.userPermissions.customer.isEdit) {
      this.userPermissions.customer.isView = true;
    } else if (type === 'bill' && this.userPermissions.bill.isEdit) {
      this.userPermissions.bill.isView = true;
    } else if (type === 'collection' && this.userPermissions.collection.isEdit) {
      this.userPermissions.collection.isView = true;
    } else if (type === 'farmer' && this.userPermissions.farmer.isEdit) {
      this.userPermissions.farmer.isView = true;
    } else if (type === 'vegetable' && this.userPermissions.vegetable.isEdit) {
      this.userPermissions.vegetable.isView = true;
    }
  }

}
