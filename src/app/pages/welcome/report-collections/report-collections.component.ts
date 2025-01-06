import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
import { FarmerService } from '../farmer/farmer.service';
import * as moment from 'moment';

@Component({
  selector: 'app-report-collections',
  templateUrl: './report-collections.component.html',
  styleUrls: ['./report-collections.component.css']
})
export class ReportCollectionsComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  collectionsData: any[] = [];
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
  loading = false;
  edit: boolean = false;
  customerId: any;
  downloadAs: SupportedExtensions = 'pdf';
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent: 'sampleTable', // the id of html/table element
  };
  userinfo: any;
  customers: any[] = [];
  reasonTypes: any[] = ['Petrol', 'Farmer', 'Transport', 'Cooli'];
  farmersData: any;
  totalCollectedAmount: number = 0;
  date = new Date();
  dateDisable = false;
  dateFormat = 'dd-MM-yyyy';

  constructor(
    private fb: UntypedFormBuilder, 
    private message: NzMessageService,
    private mainService: MainService,
    private exportAsService: ExportAsService,
    private router: Router,
    private farmerService: FarmerService
  ) {
      this.userinfo = this.mainService.getLoggedInUser();
      this.validateForm = this.fb.group({
        amount: [null, [Validators.required]],
        // reason_type: [null],
        // reason_amount: [null],
        notes: [null],
        // farmer: [null],
        date: [this.date, [Validators.required]],
        reasonType: this.fb.array([this.addReasonTpes()])
      });
      // this.validateForm.controls['reason_type'].valueChanges.subscribe(data => {
      //   console.log('data: ', data);
      //   this.validateForm.controls['reason_amount'].reset();
      //   this.validateForm.controls['farmer'].reset();
      // })
      if (this.userinfo.username !== 'admin') {
        this.dateDisable = true;
      }
  }

  get reasonType(): FormArray {
    return this.validateForm.get("reasonType") as FormArray;
  }

  addReasonTpes(): FormGroup {
    return this.fb.group({
      reason_type: new FormControl(''),
      reason_amount: new FormControl('')
    })
  }

  addfield() {
    this.reasonType.push(this.addReasonTpes())
  }

  removeField(index: number): void {
    if (this.reasonType.length > 1) {
      this.reasonType.removeAt(index);
    }
  }

  ngOnInit(): void {
    this.getAllFarmers();
    this.getcollection_reports();
  }

  submitForm() {
    // const requestBody = {
    //   date: moment(this.validateForm.value.date).format('DD-MM-YYYY'),
    //   reason_type: this.validateForm.value.reason_type,
    //   farmer_id: this.validateForm.value.reason_type === 'Farmer' ? this.validateForm.value.farmer._id : '',
    //   amount: this.validateForm.value.amount,
    //   spent_amount: this.validateForm.value.reason_amount,
    //   notes: this.validateForm.value.notes
    // }
    // console.log('requestBody: ', requestBody);
    // this.getCollectionAmountByUser(requestBody.date);
    // this.mainService.createCollectionReport(requestBody).subscribe(
    //   (data: any) => {
    //     this.message.create('success', data.message);
    //     this.reset();
    //     this.getcollection_reports();
    //   },
    //   err => {
    //     console.log('get customers err ', err);
    //     this.loading = false;
    //     this.mainService.spinning.emit(false);
    //     this.getcollection_reports();
    //   }
    // );
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  reset() {
    this.validateForm.controls['amount'].reset();
    // this.validateForm.controls['reason_type'].reset();
    // this.validateForm.controls['reason_amount'].reset();
    // this.validateForm.controls['farmer'].reset();
    this.validateForm.controls['notes'].reset();
  }

  exportToExcel() {
    let data: any = [];
    this.collectionsData.forEach(customer => {
      data.push({
        'Name': customer.name,
        'Phone Number': customer.phone_number,
        'Address': customer.address,
        'Notes': customer.notes
      })
    })
    let file_res = '<table><thead><tr><th>Name</th><th>Balance Amount</th><th>Paid Amount</th></tr></thead><tbody><tr><td>Rajesh</td><td>1500</td><td>500</td></tr><tr><td>Customer1</td><td>0</td><td>0</td></tr></tbody></table>';
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
          // this.getCustomers();
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
    // this.getCustomers();
  }

  onPageChange(event: any) {
    this.index = event;
    // this.getCustomers();
  }

  getAllFarmers() {
    const requestBody = {
      // 'skip': this.index,
      // 'limit': this.pageSize
    };
    document.getElementById('farmerName')?.focus();
    this.farmerService.getFarmers(requestBody).subscribe(
      (data: any) => {
        const farmers = data.data;
        this.farmersData = farmers;
        this.total = data.total;
      },
      err => {
        console.log('get farmers err ', err);
        this.farmersData = [];
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

  getcollection_reports() {
    const requestBody = {
      // 'skip': this.index,
      // 'limit': this.pageSize
    };
    this.mainService.getcollection_reports(requestBody).subscribe(
      (data: any) => {
        console.log('data: ', data);
        this.collectionsData = data;
      },
      err => {
        console.log('get collection_reports err ', err);
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

  getCollectionAmountByUser(date: any) {
    this.mainService.getCollectionAmountByUser({'collection_date': date}).subscribe(
      (data: any) => {
        this.totalCollectedAmount = data.collectedAmount;
        const today = new Date();
        const requestBody = {
          date: moment(today).format('DD-MM-YYYY'),
          reason_type: this.validateForm.value.reason_type,
          farmer_id: this.validateForm.value.reason_type === 'Farmer' ? this.validateForm.value.farmer._id : '',
          amount: this.validateForm.value.amount,
          spent_amount: this.validateForm.value.reason_amount,
          notes: this.validateForm.value.notes
        }
        const useramount = (requestBody.amount + (requestBody.spent_amount ? requestBody.spent_amount : 0));
        console.log('useramount: ', useramount);
        console.log('this.totalCollectedAmount: ', this.totalCollectedAmount);
        if (this.totalCollectedAmount === useramount) {
          this.message.create('info', 'okay');
        } else {
          this.message.create('error', 'not okay');
        }
      },
      err => {
        console.log('getCollectionAmountByUser err ', err);
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

  onChange(result: Date): void { }

}
