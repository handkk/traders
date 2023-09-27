import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as moment from 'moment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-day-collections',
  templateUrl: './day-collections.component.html',
  styleUrls: ['./day-collections.component.css']
})
export class DayCollectionsComponent {
  dayCollectionForm!: UntypedFormGroup;
  customers: any[] = [];
  vegetablesList: any[] = [];
  farmersList: any[] = [];
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
  dayBillsList: any[] = [];
  @ViewChild('dayBillTable') dayBillTable!: ElementRef;
  
  constructor(private fb: UntypedFormBuilder, public el: ElementRef, private message: NzMessageService,
    private mainService: MainService) {}

  ngOnInit(): void {
    this.dayCollectionForm = this.fb.group({
      customer: [null],
      date: [this.date, [Validators.required]]
    });
    // this.getDayCollections();
    // this.getCollections();
  }

  downloadPDF() {
    // https://www.youtube.com/watch?v=Kik1SvebqTg Angular 13 jsPDF Project to Export HTML Div,Table With CSS to PDF Document Using TypeScript
    // https://www.youtube.com/watch?v=Eh6StPjcWjE jsPDF Tutorial: Angular 12 Convert HTML to PDF using jsPDF & HTML2Canvas
    // let pdf = new jsPDF();
    // pdf.html(this.dayBillTable.nativeElement, {
    //   callback: (pdf) => {
    //     pdf.save('sample1.pdf')
    //   }
    // })
    html2canvas(this.dayBillTable.nativeElement, {}).then(
      canvas => {
        const imageData = canvas.toDataURL('image/png');
        console.log('imageData: ', imageData);
        const pageWidth = 208;
        const pageHeight = 295;
        
        const height = canvas.height * pageWidth / canvas.width;
        const heightLeft = height;
        const pdf = new jsPDF('p', 'mm', 'a4');

        pdf.addImage(imageData, 'PNG', 0, 0, pageWidth, height);
        pdf.save('today_bills.pdf');
      }
    )
  }

  getDayCollections() {
    let requestBody: any;
    requestBody = {
      'skip': this.index,
      'limit': this.pageSize
    };
    // setTimeout(() => {
    //   const select = document.getElementById('collectionCustomerInput');
    //   const select1 = select?.children[0].children[0];
    //   select1?.children[0].setAttribute('id', 'collectionCustIn')
    //   document.getElementById('collectionCustIn')?.focus();
    // }, 500);
    this.loading = true;
    requestBody['bill_date'] = '2023-09-22';
    this.mainService.getDayBills(requestBody).subscribe(
      (data: any) => {
        console.log('getDayBills data: ', data);
        // const collections = data.data;
        // this.collectionsData = collections;
        // this.total = data.total;
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
    this.dayCollectionForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.dayCollectionForm.valid) {
      const billdate = moment(this.dayCollectionForm.value.date).format('YYYY-MM-DD');
      const requestBody = {
        // customer_name: this.dayCollectionForm.value.customer.name,
        // customer_id: this.dayCollectionForm.value.customer._id,
        bill_date: billdate
      };
      console.log('requestBody: ', requestBody);
      this.mainService.getDayBills(requestBody).subscribe(
        (data: any) => {
          console.log('getDayBills data: === ', data);
          this.dayBillsList = [];
          this.loading = false;
          // this.message.create('success', `Collection added Successfully`);
          // this.reset();
          // this.loading = true;
          // this.getDayCollections();
        },
        err => {
          console.log('get customers err ', err);
          this.loading = false;
          // this.getDayCollections();
        }
      );
    } else {
      Object.values(this.dayCollectionForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  reset() {
    this.dayCollectionForm.controls['amount'].reset();
    this.dayCollectionForm.controls['notes'].reset();
  }

  onChange(result: Date): void {}

  deleteConfirm(id: string) {
    this.loading = true;
    this.mainService.removeCollection(id).subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.success) {
          this.message.create('success', data.message);
          // this.getCollections();
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
    // this.getCollections();
  }

  onPageChange(event: any) {
    this.index = event;
    // this.getCollections();
  }

  printTable() {
    window.print();
  }
}
