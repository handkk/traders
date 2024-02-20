import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import * as moment from 'moment';

@Component({
  selector: 'app-bill-print',
  templateUrl: './bill-print.component.html',
  styleUrls: ['./bill-print.component.css']
})
export class BillPrintComponent implements OnInit {

  isVisible = false;
  todayDate = '';
  day = 0;
  tablestring = '';
  printData: any[] = [];

  constructor(
    private mainService: MainService
  ) {}

  ngOnInit() {
    const today_date: Date = new Date();
    this.day = today_date.getDay();
    this.todayDate = moment(today_date).format('DD/MM/YYYY');
    // this.todayDate = today_date.getUTCDate() + '/' + (today_date.getUTCMonth() + 1) + '/' + today_date.getUTCFullYear();
    // this.getbalance_statement();
    this.printCustomerBills();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  print() {
    window.open();
  }

  getbalance_statement() {
    const requestBody = {};
    this.mainService.get_balance_statement(requestBody).subscribe(
      (data: any) => {
        console.log('getbalance_statement data: ', data);
        if (data.table) {
          this.tablestring = data.table;
        }
      },
      err => {
        console.log('get customers err ', err);
      }
    );
  }

  printCustomerBills() {
    const today_date = new Date();
    const new1 = moment(today_date).format('YYYY-MM-DD')
    console.log('new1: ', new1);
    const requestBody = {
      'skip': 0,
      'limit': 1000,
      'bill_date': new1
    };
    console.log('requestBody: ', requestBody);
    this.mainService.spinning.emit(true);
    this.mainService.printCustomerBills(requestBody).subscribe(
      (data: any) => {
        let customer_bills;
        console.log('customer_bills: ', customer_bills);
        data.forEach((c: any) => {
          c['balance'] = c['collected_amount'] - c['last_amount_updated'];
          c['bill_amount'] = 0;
          c.bills.forEach((b: any) => {
              c['bill_amount'] = c['bill_amount'] + b['total_amount']
          })
          c['total_bill'] = c['bill_amount'] - c['balance'];
        });
        customer_bills = data;
        // req.body.bill_date + '2024-02-09T00:00:00.000Z';
        // let updated_customers: any = customer_bills;
        // updated_customers.forEach((cb: any) => {
        //   const arr = cb.bills;
        //   console.log('arr: ', arr);
        //   arr.forEach(() => {
        //     const index = arr.findIndex((obj: any) => {
        //       return obj.bill_date !== '2024-02-11T00:00:00.000Z';
        //     });
        //     if (index !== -1) {
        //       arr.splice(index, 1);
        //     }
        //   })
        // });
        console.log('after customer_bills: ', customer_bills);
        if (customer_bills) {
          this.printData = customer_bills;
        }
        this.mainService.spinning.emit(false);
      },
      err => {
        console.log('get customers err ', err);
        this.mainService.spinning.emit(false);
      }
    );
  }

}
