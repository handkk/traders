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
  collectionsData: any[] = [];
  date = new Date();

  constructor(
    private mainService: MainService
  ) {}

  ngOnInit() {
    const today_date: Date = new Date();
    this.day = today_date.getDay();
    this.todayDate = moment(today_date).format('DD-MM-YYYY');
    // this.todayDate = today_date.getUTCDate() + '/' + (today_date.getUTCMonth() + 1) + '/' + today_date.getUTCFullYear();
    // this.getbalance_statement();
    this.getCollections();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  print() {
    window.open();
  }

  getbalance_statement() {
    const requestBody = {};
    this.mainService.get_balance_statement(requestBody).subscribe(
      (data: any) => {
        if (data.table) {
          this.tablestring = data.table;
        }
      },
      err => {
        console.log('get customers err ', err);
      }
    );
  }

  getCollectionsByCustomerId(id: string) {
    this.mainService.getCollectionsByCustomerId(id).subscribe(
      (data: any) => {
        let latestCollections: any = [];
        if (data && data.length > 0) {
          latestCollections.push(data[0]);
          latestCollections.push(data[1]);
        } 
        this.printData.forEach(p => {
          if (p.cusomer_id === id) {
            p['collections'] = latestCollections;
          }
        });
      },
      err => {
        console.log('get customers err ', err);
        return err;
      }
    );
  }

  printCustomerBills() {
    const today_date = new Date();
    const new1 = moment(this.date).format('YYYY-MM-DD')
    const requestBody = {
      'skip': 0,
      'limit': 1000,
      'bill_date': new1
    };
    this.mainService.spinning.emit(true);
    this.mainService.printCustomerBills(requestBody).subscribe(
      (data: any) => {
        let customer_bills;
        data.forEach((c: any) => {
          c['balance'] = c['collected_amount'] - c['last_amount_updated'];
          c['bill_amount'] = 0;
          c.bills.forEach((b: any) => {
              c['bill_amount'] = c['bill_amount'] + b['total_amount']
          })
          c['total_bill'] = c['bill_amount'] - c['balance'];
          c['collections'] = [];
          this.collectionsData.forEach(col => {
            if (c['cusomer_id'] === col['customer_id']) {
              if (c['collections'].length < 2) {
                c['collections'].push(col);
              }
            }
          });
        });
        customer_bills = data;
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

  getCollections() {
    const requestBody = {};
    this.mainService.getCollections(requestBody).subscribe(
      (data: any) => {
        const collections = data.data;
        this.collectionsData = collections;
        this.printCustomerBills();
      },
      err => {
        console.log('get customers err ', err);
        this.collectionsData = [];
      }
    );
  }

  onChange(result: any): void {
    this.printCustomerBills();
  }

}
