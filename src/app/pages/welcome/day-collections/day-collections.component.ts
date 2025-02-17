import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as moment from 'moment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

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
  dayBillsList1: any[] = [];
  dayBillsList2: any[] = [];
  @ViewChild('dayBillTable') dayBillTable!: ElementRef;
  dateFormat = 'dd-MM-yyyy';
  
  constructor(private fb: UntypedFormBuilder, public el: ElementRef, private message: NzMessageService,
    private mainService: MainService, private router: Router) {
      let userinfo: any = sessionStorage.getItem('userinfo');
      if (!userinfo) {
        sessionStorage.clear();
        this.message.create('warning', 'User session expired please login');
        this.router.navigateByUrl('/login');
      }
    }

  ngOnInit(): void {
    this.dayCollectionForm = this.fb.group({
      customer: [null],
      date: [this.date, [Validators.required]]
    });
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

  clearfield(input: string) {
    this.dayCollectionForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.dayCollectionForm.valid) {
      const billdate = moment(this.dayCollectionForm.value.date).format('DD-MM-YYYY');
      let requestBody: any =  {
        'skip': 0,
        'limit': 1000,
        'bill_date': billdate
      };
      this.mainService.spinning.emit(true);
      this.mainService.getDayBills(requestBody).subscribe(
        (data: any) => {
          this.dayBillsList = [];
          this.mainService.spinning.emit(false);
          if (data && data.length > 0) {
            this.dayBillsList = data;
            if (this.dayBillsList.length <= 28) {
              this.dayBillsList1 = this.dayBillsList;
            } else if (this.dayBillsList.length > 28) {
              let temp = this.dayBillsList;
              let first = temp.slice(0, 28);
              console.log('first: ', first);
              let second = temp.slice(28);
              console.log('second: ', second);
              this.dayBillsList1 = first;
              this.dayBillsList2 = second;
            }
          }
        },
        err => {
          console.log('get customers err ', err);
          this.loading = false;
          this.mainService.spinning.emit(false);
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
