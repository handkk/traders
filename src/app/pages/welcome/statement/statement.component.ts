import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import * as moment from 'moment';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  from_date = new Date();
  to_date = new Date();
  todayDate = '';
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
      'bill_date': this.todayDate
    };
    this.mainService.getStatement(requestBody).subscribe(
      (data: any) => {
      console.log('data: ', data);        
      },
      err => {
        console.log('get customers err ', err);
        return err;
      }
    );
  }

  onChange(event: any) {}

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
    const from_date = moment(this.from_date).format('YYYY-MM-DD') + 'T00:00:00.000Z';
    const to_date = moment(this.to_date).format('YYYY-MM-DD') + 'T00:00:00.000Z';
    console.log('this.from_date: ', moment(this.from_date).format('YYYY-MM-DD'));
    console.log('this.to_date: ', moment(this.to_date).format('YYYY-MM-DD'));
    console.log('onCustomerSelect selected: ', this.selectedCustomer);
    const startDate = moment(this.from_date).format('DD');
    console.log('startDate: ', startDate);
    const toDate = moment(this.to_date).format('DD');
    console.log('toDate: ', toDate);
    // let fromCollection = this.selectedCustomer.customerCollection.find((coll: any) => coll.bill_date === from_date);
    console.log('fromCollection: ', this.from_date.getDate());
    let collections: any = [];
    let date: any;
    let firstIndex = -1;
    let secondIndex = -1;
    this.selectedCustomer.customerCollection.forEach((coll: any, i: number) => {
      // console.log('i: ', i);
      if (from_date === coll.bill_date) {
        firstIndex = i;
      }
      if (to_date === coll.bill_date) {
        secondIndex = i;
      }
    });
    console.log('firstIndex: ', firstIndex);
    console.log('secondIndex: ', secondIndex);
    this.selectedCustomer.customerCollection.forEach((coll: any, i: number) => {
      if (i === firstIndex || i <= secondIndex) {
        console.log('coll i: ', i);
        console.log('coll firstIndex: ', firstIndex);
        console.log('coll secondIndex: ', secondIndex);
        collections.push(coll);
      }
    });
    console.log('collections: ', collections);
    collections.forEach((col: any) => {
      col.records.forEach((colss: any) => {
        this.statement.push(colss);
      });
    });
  }

}
