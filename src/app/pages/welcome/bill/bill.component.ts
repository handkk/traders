import { Component, ElementRef, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
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
  billsData: any[] = [
    {
      name: 'Srinivas',
      item: 'Potato',
      rate: 200,
      quantity: 1
    },
    {
      name: 'Srinivas',
      item: 'Potato',
      rate: 200,
      quantity: 1
    },
    {
      name: 'Rajesh',
      item: 'Tomato',
      rate: 200,
      quantity: 1
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
      quantity: [null, [Validators.required]],
      rate: [null, [Validators.required]],
      vegetables: [null, [Validators.required]],
      farmer: [null, [Validators.required]],
      date: [this.date, [Validators.required]],
      notes: [null]
    });
    this.total = this.billsData.length;
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.billsData.push({
        name: this.validateForm.value.customer,
        item: this.validateForm.value.vegetables,
        rate: this.validateForm.value.rate,
        quantity: this.validateForm.value.quantity
      });
      this.validateForm.controls['quantity'].reset();
      this.validateForm.controls['rate'].reset();
      this.validateForm.controls['notes'].reset();
      this.message.create('success', `Bill added Successfully`);
      // this.validateForm.controls['customer'].markAsTouched();
      // this.validateForm.controls['customer'].updateValueAndValidity();
      // const invalidControl = this.el.nativeElement.querySelector('[formcontrolname="rate"]');
      // console.log('quantity element ', document.getElementById('quantity'));
      // document.getElementById('quantity')?.focus();

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
