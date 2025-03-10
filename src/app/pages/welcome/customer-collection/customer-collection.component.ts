import { Component, ElementRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-collection',
  templateUrl: './customer-collection.component.html',
  styleUrls: ['./customer-collection.component.css']
})
export class CustomerCollectionComponent {
  validateForm!: UntypedFormGroup;
  customers: any[] = [
    { name: 'Srinivas', id: 'c1' },
    { name: 'Sai', id: 'c2' },
    { name: 'Raju', id: 'c3' },  
    { name: 'Chandu', id: 'c4' }
  ];
  vegetablesList: any[] = [
    { name: 'Cabage', id: 'v1' },
    { name: 'Onion', id: 'v2' },
    { name: 'Potato', id: 'v3' },  
    { name: 'Tomato', id: 'v4' }
  ];
  farmersList: any[] = [
    { name: 'Teja', id: 'f1' },
    { name: 'Ravi', id: 'f2' },
    { name: 'Venkatesh', id: 'f3' },  
    { name: 'Sai', id: 'f4' }
  ];
  date = new Date();
  defaultDate = new Date();
  collectionsData: any[] = [];
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
  pageSize = 10;
  loading: boolean = false;
  selectedCustomer: any = null;
  total_amount: number = 0;
  dateFormat = 'dd-MM-yyyy';
  dateDisable = false;
  userinfo: any;
  
  constructor(private fb: UntypedFormBuilder, public el: ElementRef, private message: NzMessageService,
    private mainService: MainService, private router: Router) {
      this.userinfo = this.mainService.getLoggedInUser();
      if (!this.userinfo) {
        sessionStorage.clear();
        this.message.create('warning', 'User session expired please login');
        this.router.navigateByUrl('/login');
      }
      if (this.userinfo.username !== 'admin') {
        this.dateDisable = true;
      }
    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      customer: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      date: [this.date, [Validators.required]],
      notes: [null]
    });
    this.getCustomers();
    this.getCollections();
  }

  getCollections() {
    const date = new Date();
    const requestBody = {
      'skip': this.index,
      'limit': this.pageSize,
      'collection_date': moment(date).format('DD-MM-YYYY')
    };
    setTimeout(() => {
      const select = document.getElementById('collectionCustomerInput');
      const select1 = select?.children[0].children[0];
      select1?.children[0].setAttribute('id', 'collectionCustIn')
      document.getElementById('collectionCustIn')?.focus();
    }, 500);
    this.loading = true;
    this.mainService.getCollections(requestBody).subscribe(
      (data: any) => {
        const collections = data.data;
        this.collectionsData = collections;
        this.total = data.total;
        this.loading = false;
      },
      err => {
        this.collectionsData = [];
        this.loading = false;
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.message.create('error', err.error.message);
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
      }
    );
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
      }
    );
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const billdate = moment(this.validateForm.value.date).format('DD-MM-YYYY');
      const requestBody = {
        customer_name: this.validateForm.value.customer.name,
        customer_id: this.validateForm.value.customer._id,
        notes: this.validateForm.value.notes,
        amount: this.validateForm.value.amount,
        collection_date: billdate
      };
      this.mainService.createCollection(requestBody).subscribe(
        (data: any) => {
          this.message.create('success', `Collection added Successfully`);
          this.reset();
          this.loading = true;
          this.selectedCustomer = null;
          this.getCollections();
          setTimeout(() => {
            this.getCustomers();
          }, 200);
        },
        err => {
          this.loading = false;
          if (err && err.error) {
            if (!err.error.success && err.error.code === 1000) {
              this.message.create('error', err.error.message);
              sessionStorage.clear();
              this.router.navigateByUrl('/login');
            }
          } else {
            this.getCollections();
          }
        }
      );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  reset() {
    this.validateForm.controls['amount'].reset();
    this.validateForm.controls['notes'].reset();
  }

  onChange(result: Date): void {}

  deleteConfirm(id: string) {
    this.loading = true;
    this.mainService.removeCollection(id).subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.success) {
          this.message.create('success', data.message);
          this.getCollections();
        }
      },
      err => {
        if (err && err.error) {
          if (!err.error.success && err.error.code === 1000) {
            this.message.create('error', err.error.message);
            sessionStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }
        this.loading = false;
      }
    );
  }

  cancel() {}

  onPageSizeChange(event: any) {
    this.pageSize = event;
    this.getCollections();
  }

  onPageChange(event: any) {
    this.index = event;
    this.getCollections();
  }

  customerSelected(event: any) {
    // let bill_amount = 0;
    // if (event && event.customerCollection && event.customerCollection.length > 0) {
    //   if (event.customerCollection[event.customerCollection.length - 1].records.length > 0) {
    //     const records = event.customerCollection[event.customerCollection.length - 1].records;
    //     const bills = records[records.length - 1];
    //     if (bills) {
    //       bill_amount = bills['total_amount'];
    //     }
    //   }
    // }
    this.selectedCustomer = event;
    // this.total_amount = bill_amount;
  }
}
