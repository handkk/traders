import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as moment from 'moment';

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
  
  constructor(private fb: UntypedFormBuilder, public el: ElementRef, private message: NzMessageService,
    private mainService: MainService) {}

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
    const requestBody = {
      'skip': this.index,
      'limit': this.pageSize
    };
    document.getElementById('amountCollection')?.focus();
    this.loading = true;
    this.mainService.getCollections(requestBody).subscribe(
      (data: any) => {
        const collections = data.data;
        this.collectionsData = collections;
        this.total = data.total;
        this.loading = false;
      },
      err => {
        console.log('get customers err ', err);
        this.collectionsData = [];
        this.loading = false;
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
      const billdate = moment(this.validateForm.value.date).format('YYYY-MM-DDTHH:mm:ss.000');
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
          this.getCollections();
        },
        err => {
          console.log('get customers err ', err);
          this.loading = false;
          this.getCollections();
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
        console.log('get customers err ', err);
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
}
