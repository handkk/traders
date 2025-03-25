import { Component, ElementRef, inject, OnInit, QueryList, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import { FarmerService } from '../farmer/farmer.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  customers: any[] = [];
  vegetablesList: any[] = [];
  farmersList: any[] = [];
  date = new Date();
  defaultDate = new Date();
  billsData: any[] = [];
  sort = ['ascend'];
  listOfColumns = [
    {
      name: 'Name', sortOrder: 'ascend'
    },
    {
      item: 'Item', sortOrder: null
    },
    {
      rate: 'Rate', sortOrder: null
    },
    {
      quantity: 'quantity', sortOrder: null
    }
  ];
  index = 1;
  total = 0;
  pageSize = 20;
  loading = true;
  edit: boolean = false;
  billId: any;
  switchValue: boolean = false;
  dateDisable = false;
  bill_data: any;
  disabledDate: any;
  userinfo: any;
  dateFormat = 'dd-MM-yyyy';
  total_quantity: number = 0;
  total_amount: number = 0;
  bill_date = new Date();

  constructor(private fb: UntypedFormBuilder,
    public el: ElementRef,
    private message: NzMessageService,
    private mainService: MainService,
    private farmerService: FarmerService,
    private router: Router,
    private notificationService: NzNotificationService
  ) {
    this.userinfo = this.mainService.getLoggedInUser();
    if (!this.userinfo) {
      sessionStorage.clear();
      this.notificationService
      .create(
        'warning',
        'Session Expired',
        'User session expired please login', { nzPlacement: 'top' }
      );
      this.router.navigateByUrl('/login');
    } else if (this.userinfo.username !== 'admin') {
      if (!this.userinfo?.apps?.bill?.isView && !this.userinfo?.apps?.bill?.isEdit) {
        this.router.navigateByUrl('/main')
      } else if (!this.userinfo?.apps?.bill?.isView) {
        this.router.navigateByUrl('/main')
      }
    }
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      customer: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      rate: [null, [Validators.required]],
      vegetables: [null, [Validators.required]],
      farmer: [null, [Validators.required]],
      date: [this.date, [Validators.required]],
      notes: [null]
    });
    this.total = this.billsData.length;
    const user: any = sessionStorage.getItem('userinfo');
    const userinfo: any = JSON.parse(user);
    if (userinfo.username !== 'admin') {
      this.dateDisable = true;
    }
    this.getCustomers();
    this.getAllFarmers();
    this.getAllVegetables();
    this.getBills();
    this.switchValue = false;
    setTimeout(() => {
      const select = document.getElementById('customerSelection');
      const select1 = select?.children[0].children[0];
      select1?.children[0].setAttribute('id', 'customerselect')
      document.getElementById('customerselect')?.focus();
    }, 500);
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  getBills() {
    this.total_amount = 0;
    this.total_quantity = 0;
    const requestBody = {
      // 'skip': this.index,
      // 'limit': this.pageSize,
      'bill_date': moment(this.bill_date).format('DD-MM-YYYY')
    };
    this.mainService.spinning.emit(true);
    this.loading = true;
    this.mainService.getBills(requestBody).subscribe(
      (data: any) => {
        const bills = data.data;
        this.billsData = bills;
        this.total = data.total;
        this.mainService.spinning.emit(false);
        this.loading = false;
        this.billsData.forEach(bil => {
          this.total_quantity = this.total_quantity + bil.quantity;
          this.total_amount = this.total_amount + bil.total_amount;
        });
        // this.getCustomers();
      },
      err => {
        console.log('get customers err ', err);
        this.billsData = [];
        this.mainService.spinning.emit(false);
        this.loading = false;
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.notificationService
            .create(
              'error',
              'Get Bills',
              err.error.message, { nzPlacement: 'top' }
            );
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
      }
    );
  }

  removeDuplicates(data: any, key: any) {
    return [...new Map(data.map((x: any) => [key(x), x])).values()]
  }

  getCustomers() {
    const requestBody = {};
    this.mainService.getCustomers(requestBody).subscribe(
      (data: any) => {
        const customers = data.data;
        this.customers = customers;
      },
      err => {
        console.log('get customers err ', err);
        this.customers = [];
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.notificationService
            .create(
              'error',
              'Get Customers',
              err.error.message, { nzPlacement: 'top' }
            );
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
      }
    );
  }

  getAllFarmers() {
    const requestBody = {};
    this.farmerService.getFarmers(requestBody).subscribe(
      (data: any) => {
        const farmers = data.data;
        this.farmersList = farmers;
      },
      err => {
        console.log('get farmers err ', err);
        this.farmersList = [];
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.notificationService
            .create(
              'error',
              'Get Farmers',
              err.error.message, { nzPlacement: 'top' }
            );
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
      }
    );
  }

  getAllVegetables() {
    const requestBody = {};
    this.mainService.getVegetables(requestBody).subscribe(
      (data: any) => {
        const vegetables = data.data;
        this.vegetablesList = vegetables;
      },
      err => {
        console.log('get customers err ', err);
        this.vegetablesList = [];
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.notificationService
            .create(
              'error',
              'Session Expired',
              err.error.message, { nzPlacement: 'top' }
            );
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
      }
    );
  }

  clickSwitch() {
    this.switchValue = !this.switchValue;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const billdate = moment(this.validateForm.value.date).format('DD-MM-YYYY')
      const requestBody: any = {
        bill_date: this.edit ? this.bill_data.bill_date : billdate,
        customer_name: this.validateForm.value.customer.name,
        customer_id: this.validateForm.value.customer._id,
        vegetable_name: this.validateForm.value.vegetables.name,
        vegetable_id: this.validateForm.value.vegetables._id,
        rate: this.validateForm.value.rate,
        quantity: this.validateForm.value.quantity,
        farmer_name: this.validateForm.value.farmer.name,
        farmer_id: this.validateForm.value.farmer._id,
        unit_wise: this.switchValue,
        notes: this.validateForm.value.notes,
        customer_balance_amount: this.validateForm.value.customer.balance_amount
      };
      this.mainService.spinning.emit(true);
      if (!this.edit) {
        this.mainService.createBill(requestBody).subscribe(
          (data: any) => {
            this.notificationService
            .create(
              'success',
              'New Bill',
              'Bill added Successfully', { nzPlacement: 'top' }
            );
            this.mainService.spinning.emit(false);
            this.validateForm.controls['quantity'].reset();
            this.validateForm.controls['notes'].reset();
            this.index = 1;
            this.pageSize = 10;
            setTimeout(() => {
              const select = document.getElementById('customerSelection');
              const select1 = select?.children[0].children[0];
              select1?.children[0].setAttribute('id', 'customerselect')
              document.getElementById('customerselect')?.focus();
            }, 500);
            this.getBills();
          },
          err => {
            this.mainService.spinning.emit(false);
            if (err && err.error) {
              if (!err.error.success && err.error.code === 1000) {
                this.notificationService
                .create(
                  'error',
                  'Session Expired',
                  err.error.message, { nzPlacement: 'top' }
                );
                sessionStorage.clear();
                this.router.navigateByUrl('/login');
              } else {
                this.notificationService
                .create(
                  'error',
                  'Session Expired',
                  err.error.message, { nzPlacement: 'top' }
                );
              }
            }
          }
        );
      } else {
        requestBody['isCustEdited'] = this.bill_data.customer_id == this.validateForm.value.customer._id ? false : true;
        requestBody['oldCustId'] = this.bill_data.customer_id;
        this.mainService.updateBill(this.bill_data._id, requestBody).subscribe(
          (data: any) => {
            this.notificationService
            .create(
              'success',
              'Update Bill',
              'Bill updated Successfully', { nzPlacement: 'top' }
            );
            this.mainService.spinning.emit(false);
            this.validateForm.controls['quantity'].reset();
            this.validateForm.controls['notes'].reset();
            this.index = 1;
            this.pageSize = 10;
            this.edit = false;
            this.date = new Date();
            this.getBills();
          },
          err => {
            console.log('get customers err ', err);
            this.mainService.spinning.emit(false);
            if (err && err.error) {
              if (!err.error.success && err.error.code === 1000) {
                this.notificationService
                .create(
                  'error',
                  'Session Expired',
                  err.error.message, { nzPlacement: 'top' }
                );
                sessionStorage.clear();
                this.router.navigateByUrl('/login');
              }
            }
          }
        );
      }
    } else {
      this.mainService.spinning.emit(false);
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  onChange(result: Date): void { }

  reset() {
    this.validateForm.controls['quantity'].reset();
    this.validateForm.controls['rate'].reset();
    this.validateForm.controls['notes'].reset();
    this.edit = false;
    this.switchValue = false;
  }

  deleteConfirm(id: string) {
    this.loading = true;
    this.mainService.spinning.emit(true);
    this.mainService.removeBill(id).subscribe(
      (data: any) => {
        this.loading = false;
        this.mainService.spinning.emit(false);
        if (data && data.success) {
          this.notificationService
          .create(
            'success',
            'Delete Bill',
            data.message, { nzPlacement: 'top' }
          );
          this.getBills();
        }
      },
      err => {
        console.log('get customers err ', err);
        this.loading = false;
        this.mainService.spinning.emit(false);
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.notificationService
            .create(
              'error',
              'Get Bill',
              err.error.message, { nzPlacement: 'top' }
            );
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
      }
    );
  }

  cancel() { }

  onPageSizeChange(event: any) {
    this.pageSize = event;
    this.getBills();
  }

  onPageChange(event: any) {
    this.index = event;
    this.getBills();
  }

  editBill(data: any) {
    this.edit = true;
    this.bill_data = data;
    this.billId = data._id;
    this.date = data.bill_date;
    let customer = this.customers.find((element) => element._id === data.customer_id);
    let vegetable = this.vegetablesList.find((veg) => veg._id === data.vegetable_id);
    let farmerData = this.farmersList.find((farmer) => farmer._id === data.farmer_id);
    this.validateForm.controls['customer'].setValue(customer);
    this.validateForm.controls['notes'].setValue(data.notes);
    this.validateForm.controls['quantity'].setValue(data.quantity);
    this.validateForm.controls['rate'].setValue(data.rate);
    this.validateForm.controls['vegetables'].setValue(vegetable);
    this.validateForm.controls['farmer'].setValue(farmerData);
    this.switchValue = data.unit_wise;
    this.dateDisable = true;
  }

  onBillChange(event: Date) {
    this.bill_date = event;
    this.getBills();
  }
}
