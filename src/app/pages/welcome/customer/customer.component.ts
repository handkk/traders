import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import {
  ExportAsService,
  ExportAsConfig,
  SupportedExtensions,
} from 'ngx-export-as';
import { Router } from '@angular/router';

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
  total = 0;
  pageSize = 10;
  loading = true;
  edit: boolean = false;
  customerId: any;
  downloadAs: SupportedExtensions = 'pdf';
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent: 'sampleTable', // the id of html/table element
  };

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private mainService: MainService,
    private exportAsService: ExportAsService,
    private router: Router) {
      let userinfo: any = this.mainService.getLoggedInUser();
      if (!userinfo) {
        sessionStorage.clear();
        this.message.create('warning', 'User session expired please login');
        this.router.navigateByUrl('/login');
      } 
      // else if (userinfo && userinfo.apps.bill) {
      //   this.router.navigateByUrl('/bill');
      // } else if (userinfo && userinfo.apps.billprint) {
      //   this.router.navigateByUrl('/bill_print');
      // } else if (userinfo && userinfo.apps.collection) {
      //   this.router.navigateByUrl('/customer-collection');
      // } else if (userinfo && userinfo.apps.farmer) {
      //   this.router.navigateByUrl('/farmer');
      // } else if (userinfo && userinfo.apps.vegetable) {
      //   this.router.navigateByUrl('/vegetables');
      // }
    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null],
      address: [null],
      notes: [null]
    });
    this.getCustomers();
  }

  getCustomers() {
    const requestBody = {
      'skip': this.index,
      'limit': this.pageSize
    };
    document.getElementById('customerName')?.focus();
    this.mainService.spinning.emit(true);
    this.mainService.getCustomers(requestBody).subscribe(
      (data: any) => {
        const customers = data.data;
        this.mainService.spinning.emit(false);
        this.customersData = customers;
        this.total = data.total;
        this.loading = false;
      },
      err => {
        console.log('get customers err ', err);
        this.mainService.spinning.emit(false);
        this.customersData = [];
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

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const requestBody = {
        name: this.validateForm.value.name,
        phone_number: this.validateForm.value.phoneNumber,
        address: this.validateForm.value.address,
        notes: this.validateForm.value.notes
      };
      this.mainService.spinning.emit(true);
      if (this.edit) {
        this.mainService.updateCustomer(this.customerId, requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} customer updated Successfully`);
            this.reset();
            this.loading = true;
            this.edit = false;
            this.mainService.spinning.emit(false);
            this.getCustomers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.mainService.spinning.emit(false);
            if (err && err.error) {
              if (!err.error.success && err.error.code === 1000) {
                this.message.create('error', err.error.message);
                sessionStorage.clear();
                this.router.navigateByUrl('/login');
              }
            } else {
              this.getCustomers();
            }
          }
        );
      } else {
        this.mainService.createCustomer(requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} Customer added Successfully`);
            this.reset();
            this.loading = true;
            this.mainService.spinning.emit(false);
            this.getCustomers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.mainService.spinning.emit(false);
            if (err && err.error) {
              if (!err.error.success && err.error.code === 1000) {
                this.message.create('error', err.error.message);
                sessionStorage.clear();
                this.router.navigateByUrl('/login');
              }
            } else {
              this.getCustomers();
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
    // this.exportJsonAsExcelFile(data, 'customers');
    let file_res = '<table><thead><tr><th>Name</th><th>Balance Amount</th><th>Paid Amount</th></tr></thead><tbody><tr><td>Rajesh</td><td>1500</td><td>500</td></tr><tr><td>Customer1</td><td>0</td><td>0</td></tr></tbody></table>';
    // let fileResponseData = 'PHRhYmxlPjx0aGVhZD48dHI+PHRoPk5hbWU8L3RoPjx0aD5CYWxhbmNlIEFtb3VudDwvdGg+PHRoPlBhaWQgQW1vdW50PC90aD48L3RyPjwvdGhlYWQ+PHRib2R5Pjx0cj48dGQ+UmFqZXNoPC90ZD48dGQ+MTUwMDwvdGQ+PHRkPjUwMDwvdGQ+PC90cj48dHI+PHRkPkN1c3RvbWVyMTwvdGQ+PHRkPjA8L3RkPjx0ZD4wPC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT4=';
    // const binaryString = window.atob(fileResponseData);
    // const bytes = new Uint8Array(binaryString.length);
    // const binaryToBlob = bytes.map((byte, i) => binaryString.charCodeAt(i));
    // const blob = new Blob([binaryToBlob], { type: 'application/pdf' });
    // this.downloadFile(blob, 'customer');
    // const doc = new jsPDF('p', 'pt', 'a4');
    // var source = document.getElementById('customerTable')?.innerHTML
    // var margins = {
    //   top: 10,
    //   bottom: 10,
    //   left: 10,
    //   width: 595
    // }
    // doc.html(file_res);
    // doc.text(file_res, 10, 10);
    // doc.save('customers.pdf');
    this.exportAsConfig.type = this.downloadAs;
    this.exportAsConfig.elementIdOrContent = file_res;
    this.exportAsConfig.options = {
      margins: {
        top: '50'
      }
    }
    // download the file using old school javascript method
    this.exportAsService
      .save(this.exportAsConfig, 'customers')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
    //   console.log(content);
    // });
  }

  private downloadFile(blob: any, fileName: string): void {
    // IE Browser
    // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //  window.navigator.msSaveOrOpenBlob(blob, fileName);
    //  return;
    // }
    // Other Browsers
    const url = (window.URL || window.webkitURL).createObjectURL(blob);
    var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName + '.pdf';
        link.click();
        // window.URL.revokeObjectURL(link.href);
    
    setTimeout(() => {
     window.URL.revokeObjectURL(url);
    }, 1000);
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
        } else if (!data.success) {
          this.message.create('warning', data.message);
        }
      },
      err => {
        console.log('get customers err ', err);
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

  cancel() {}

  onPageSizeChange(event: any) {
    this.pageSize = event;
    this.getCustomers();
  }

  onPageChange(event: any) {
    this.index = event;
    this.getCustomers();
  }
}
