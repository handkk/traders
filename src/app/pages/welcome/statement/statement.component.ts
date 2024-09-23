import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private mainService: MainService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomerStatement(id: any) {
    let requestBody: any = {
      'customer_id': id
    };
    if (this.from_date !== '') {
      requestBody['from_date'] = this.from_date
    }
    if (this.to_date !== '') {
      requestBody['to_date'] = this.to_date
    }
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
        this.message.create('error', err.error.message);
      }
    );
  }

  onChange(result: Date[]) {
    if (result && result.length > 0) {
      this.from_date = moment(result[0]).format('YYYY-MM-DD');
      this.to_date = moment(result[1]).format('YYYY-MM-DD');
    } else {
      this.from_date = '';
      this.to_date = ''
      this.date = null;
    }
    this.statement = [];
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
    this.statement = [];
  }

  getStatement() {
    this.statement = [];
    this.getCustomerStatement(this.selectedCustomer._id);
  }

}
