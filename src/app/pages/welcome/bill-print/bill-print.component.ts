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
  maxCount = 2
  breakCount: number = 9; // if u want max 3 set 2 , if u want 10 recourd set 9
  finalArray: any[] = [];
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    const today_date: Date = new Date();
    this.day = this.date.getDay();
    this.todayDate = moment(today_date).format('DD-MM-YYYY');
    // this.todayDate = today_date.getUTCDate() + '/' + (today_date.getUTCMonth() + 1) + '/' + today_date.getUTCFullYear();
    // this.getbalance_statement();
    this.printCustomerBills();
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
  onReturnDesiredCount(count: number, list: any[]) {
    let filterArray = [];
    for (let item of list) {

    }
  }
  returnSum(customerData: any[]) {
    return customerData.reduce((count, item) => {
      return item.total_amount + count;
    }, 0)
  }
  maxRecordsCount(customerData: any[]) {
    let maxCountreached = true
    let filteredArray: any[] = [];
    customerData.forEach((dataObject, index) => {
      if (dataObject.records.length > this.breakCount+1) {
        let firstPart = dataObject.records.slice(0, this.breakCount )
        // console.log('firstPart: ', firstPart);
        let secondPart = dataObject.records.slice(this.breakCount)
        // console.log('secondPart: ', secondPart);
        let firstData = { ...dataObject }
        firstData.records = firstPart;
        let secondData = { ...dataObject }
        secondData.records = secondPart;
        secondData.total_amount = this.returnSum(secondData.records);
        firstData.total_amount = this.returnSum(firstData.records);
        // firstData['collections'] = await collectionsController.getRecentCollections(firstData.customer_id);
        // firstData['collections'] = [];
        // secondData['collections'] = [];
        filteredArray.push(firstData);
        filteredArray.push(secondData);
      } else {
        dataObject['total_amount'] = this.returnSum(dataObject.records);
        // dataObject['collections'] = [];
        // dataObject['collections'] = await collectionsController.getRecentCollections(dataObject.customer_id);
        filteredArray.push(dataObject)
      }

    })
    this.finalArray = filteredArray
    // if (index + 1 == customerData.length) {
    let hasCollectionExceedingLimit = filteredArray.some((item) => item.records.length > this.breakCount+1);
    console.log('hasCollectionExceedingLimit', hasCollectionExceedingLimit)
    if (hasCollectionExceedingLimit) {
      this.maxRecordsCount(this.finalArray)
    }else{
      
      console.log('filteredArray >>>>>', filteredArray)

    }
    // if (hasCollectionExceedingLimit) {
    //   this.maxRecordsCount(filteredArray)
    // } else {
    //   console.log(filteredArray)
    // }

    // }


    // console.log('filteredArray: ', filteredArray);
  }
  printCustomerBills() {
    const today_date = new Date();
    this.day = this.date.getDay();
    const new1 = moment(this.date).format('YYYY-MM-DD')
    const requestBody = {
      'skip': 0,
      'limit': 1000,
      'bill_date': new1
    };
    // this.mainService.spinning.emit(true);
    this.mainService.printCustomerBills(requestBody).subscribe(
      (data: any) => {
        let finalArray = []
        if (data && data.length > 0) {
          this.printData = data;
          this.maxRecordsCount(data)
          console.log('this.printData', this.printData)

        } else {
          this.printData = [];
        }
        // let customer_bills;
        // data.forEach((c: any) => {
        //   c['balance'] = c['collected_amount'] - c['last_amount_updated'];
        //   c['bill_amount'] = 0;
        //   c.bills.forEach((b: any) => {
        //       c['bill_amount'] = c['bill_amount'] + b['total_amount']
        //   })
        //   c['total_bill'] = c['bill_amount'] - c['balance'];
        //   c['collections'] = [];
        //   this.collectionsData.forEach(col => {
        //     if (c['cusomer_id'] === col['customer_id']) {
        //       if (c['collections'].length < 2) {
        //         c['collections'].push(col);
        //       }
        //     }
        //   });
        // });
        // customer_bills = data;
        // if (customer_bills) {
        //   this.printData = customer_bills;
        // }
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
