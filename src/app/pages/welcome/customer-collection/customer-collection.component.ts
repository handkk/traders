import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-customer-collection',
  templateUrl: './customer-collection.component.html',
  styleUrls: ['./customer-collection.component.css']
})
export class CustomerCollectionComponent {
  // @ViewChild('quantity') quantity: ElementRef;
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
  collectionsData: any[] = [
    {
      date: '2023-05-18',
      customerName: 'Srinivas',
      amount: 200,
      notes: ''
    }
  ];
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
  total = 9;
  pageSize = 5;
  
  constructor(private fb: UntypedFormBuilder, public el: ElementRef, private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      customer: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      date: [this.date, [Validators.required]],
      notes: [null]
    });
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.collectionsData.push({
        customerName: this.validateForm.value.customer,
        notes: this.validateForm.value.notes,
        amount: this.validateForm.value.amount,
        date: this.validateForm.value.date
      });
      this.validateForm.controls['amount'].reset();
      this.validateForm.controls['notes'].reset();
      this.message.create('success', `Collection added Successfully`);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
