import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import * as moment from 'moment';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  date = null;
  from_date = '';
  to_date = '';
  todayDate = new Date();
  customersData: any[] = [];
  selectedCustomer: any;
  statement: any[] = [];

  constructor(
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomerStatement(id: any) {
    // this.todayDate = moment(this.date).format('DD-MM-YYYY');
    const requestBody = {
      'customer_id': id,
      'from_date': this.from_date,
      'to_date': this.to_date
    };
    this.mainService.getStatement(requestBody).subscribe(
      (data: any) => {
        if (data && data.length > 0) {
          this.statement = data;
        } else {
          this.statement = [];
        }
      },
      err => {
        console.log('get customers err ', err);
        return err;
      }
    );
  }

  onChange(result: Date[]) {
    this.from_date = moment(result[0]).format('YYYY-MM-DD');
    this.to_date = moment(result[1]).format('YYYY-MM-DD');
  }

  getCustomers() {
    const requestBody = {};
    this.mainService.spinning.emit(true);
    this.mainService.getCustomers(requestBody).subscribe(
      (data: any) => {
        const customers = data.data;
        this.mainService.spinning.emit(false);
        this.customersData = customers;
      },
      err => {
        console.log('get customers err ', err);
        this.mainService.spinning.emit(false);
        this.customersData = [];
      }
    );
  }

  onCustomerSelect(event: any) {
    // console.log('onCustomerSelect event: ', event);
    // this.getCustomerStatement(event._id);
  }

  getStatement() {
    this.statement = [];
    this.getCustomerStatement(this.selectedCustomer._id)
    // const startDate = moment(this.date).format('DD');
    // console.log('startDate: ', startDate);
    // const toDate = moment(this.to_date).format('DD');
    // console.log('toDate: ', toDate);
    // let fromCollection = this.selectedCustomer.customerCollection.find((coll: any) => coll.bill_date === from_date);
    // console.log('fromCollection: ', this.from_date.getDate());
    // let collections: any = [];
    // let date: any;
    // let firstIndex = -1;
    // let secondIndex = -1;
    // this.selectedCustomer.customerCollection.forEach((coll: any, i: number) => {
    //   // console.log('i: ', i);
    //   if (from_date === coll.bill_date) {
    //     firstIndex = i;
    //   }
    //   if (to_date === coll.bill_date) {
    //     secondIndex = i;
    //   }
    // });
    // console.log('firstIndex: ', firstIndex);
    // console.log('secondIndex: ', secondIndex);
    // this.selectedCustomer.customerCollection.forEach((coll: any, i: number) => {
    //   if (i === firstIndex || i <= secondIndex) {
    //     console.log('coll i: ', i);
    //     console.log('coll firstIndex: ', firstIndex);
    //     console.log('coll secondIndex: ', secondIndex);
    //     collections.push(coll);
    //   }
    // });
    // console.log('collections: ', collections);
    // collections.forEach((col: any) => {
    //   col.records.forEach((colss: any) => {
    //     this.statement.push(colss);
    //   });
    // });
  }

}
