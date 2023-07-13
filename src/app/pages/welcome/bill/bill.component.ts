import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import { FarmerService } from '../farmer/farmer.service';
import * as moment from 'moment';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  // @ViewChild('quantity') quantity: ElementRef;
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
  total = 9;
  pageSize = 5;
  loading = true;
  edit: boolean = false;
  billId: any;
  switchValue: boolean = false;
  
  constructor(private fb: UntypedFormBuilder, 
    public el: ElementRef, 
    private message: NzMessageService,
    private mainService: MainService,
    private farmerService: FarmerService
    ) {}

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
    this.getCustomers();
    this.getAllFarmers();
    this.getAllVegetables();
    this.getBills();
    this.switchValue = false;
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  getBills() {
    this.loading = true;
    this.mainService.getBills().subscribe(
      (data: any) => {
        const bills = data;
        this.billsData = bills;
        document.getElementById('quantityNumber')?.focus();
        this.loading = false;
      },
      err => {
        console.log('get customers err ', err);
        this.billsData = [];
        document.getElementById('rate')?.focus();
        this.loading = false;
      }
    );
  }

  getCustomers() {
    // document.getElementById('customerName')?.focus();
    this.mainService.getCustomers().subscribe(
      (data: any) => {
        // console.log('get farmers ', data);
        const customers = data;
        this.customers = customers;
        // this.loading = false;
      },
      err => {
        console.log('get customers err ', err);
        this.customers = [];
        // this.loading = false;
      }
    );
  }

  getAllFarmers() {
    // this.loading = true;
    // document.getElementById('farmerName')?.focus();
    this.farmerService.getFarmers().subscribe(
      (data: any) => {
        const farmers = data;
        this.farmersList = farmers;
        // this.loading = false;
      },
      err => {
        console.log('get farmers err ', err);
        this.farmersList = [];
        // this.loading = false;
      }
    );
  }

  getAllVegetables() {
    // this.loading = true;
    this.mainService.getVegetables().subscribe(
      (data: any) => {
        const vegetables = data;
        this.vegetablesList = vegetables;
        // this.loading = false;
        // const number = this.vegetablesData.length + 1;
        // this.validateForm.controls['number'].setValue(number);
        // document.getElementById('vegetableName')?.focus();
      },
      err => {
        console.log('get customers err ', err);
        this.vegetablesList = [];
        // this.loading = false;
      }
    );
  }

  clickSwitch() {
    console.log('switch conesole ');
    this.switchValue = !this.switchValue;
    console.log('switch conesole value ', this.switchValue);
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const billdate = moment(this.validateForm.value.date).format('YYYY-MM-DDTHH:mm:ss.000')
      const requestBody = {
        bill_date: billdate,
        customer_name: this.validateForm.value.customer.name,
        customer_id: this.validateForm.value.customer._id,
        vegetable_name: this.validateForm.value.vegetables.name,
        vegetable_id: this.validateForm.value.vegetables._id,
        rate: this.validateForm.value.rate,
        quantity: this.validateForm.value.quantity,
        farmer_name: this.validateForm.value.farmer.name,
        farmer_id: this.validateForm.value.farmer._id,
        unit_wise: this.switchValue,
        notes: this.validateForm.value.notes
      };
      console.log('requestBody', requestBody);
      this.mainService.createBill(requestBody).subscribe(
        (data: any) => {
          this.message.create('success', `Bill added Successfully`);
          this.loading = false;
          this.ngOnInit();
        },
        err => {
          console.log('get customers err ', err);
          this.loading = false;
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

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  reset() {
    this.validateForm.controls['quantity'].reset();
    this.validateForm.controls['rate'].reset();
    this.validateForm.controls['notes'].reset();
    this.edit = false;
    this.switchValue = false;
  }

  deleteConfirm(id: string) {
    this.loading = true;
    this.mainService.removeBill(id).subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.success) {
          this.message.create('success', data.message);
          this.getBills();
        }
      },
      err => {
        console.log('get customers err ', err);
        this.loading = false;
      }
    );
  }

  cancel() {}
}
