import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  customersData: any[] = [];
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
  total = 9;
  pageSize = 5;
  loading = true;
  edit: boolean = false;
  customerId: any;

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private mainService: MainService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null],
      // phoneNumber: [null, [Validators.required, Validators.maxLength(10), Validators.pattern('[7-9]{1}[0-9]{9}')]],
      address: [null],
      notes: [null]
    });
    this.getCustomers();
  }

  getCustomers() {
    document.getElementById('customerName')?.focus();
    this.mainService.getCustomers().subscribe(
      (data: any) => {
        // console.log('get farmers ', data);
        const customers = data;
        this.customersData = customers;
        this.loading = false;
      },
      err => {
        console.log('get customers err ', err);
        this.customersData = [];
        this.loading = false;
      }
    );
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const requestBody = {
        name: this.validateForm.value.name,
        phone_number: this.validateForm.value.phoneNumber,
        address: this.validateForm.value.address,
        notes: this.validateForm.value.notes,
        email: 'admin@traders.com'
      };
      if (this.edit) {
        this.mainService.updateCustomer(this.customerId, requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} customer updated Successfully`);
            this.reset();
            this.loading = true;
            this.edit = false;
            this.getCustomers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.getCustomers();
          }
        );
      } else {
        this.mainService.createCustomer(requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} Customer added Successfully`);
            this.reset();
            this.loading = true;
            this.getCustomers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.getCustomers();
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
    this.customersData.forEach(customer => {
      data.push({
        'Name': customer.name,
        'Phone Number': customer.phone_number,
        'Address': customer.address,
        'Notes': customer.notes
      })
    })
    this.exportJsonAsExcelFile(data, 'customers');
  }

  reset() {
    this.validateForm.controls['name'].reset();
    this.validateForm.controls['phoneNumber'].reset();
    this.validateForm.controls['address'].reset();
    this.validateForm.controls['notes'].reset();
    this.edit = false;
    document.getElementById('customerName')?.focus();
  }

  editCustomer(data: any) {
    this.edit = true;
    this.customerId = data._id;
    this.validateForm.controls['phoneNumber'].setValue(data.phone_number);
    this.validateForm.controls['name'].setValue(data.name);
    this.validateForm.controls['notes'].setValue(data.notes);
    this.validateForm.controls['address'].setValue(data.address);
  }

  deleteConfirm(id: string) {
    this.mainService.removeCustomer(id).subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.success) {
          this.message.create('success', data.message);
          this.getCustomers();
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
