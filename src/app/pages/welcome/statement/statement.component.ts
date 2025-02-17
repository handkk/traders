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
  total_bill_amount = 0;
  total_collected_amount = 0;
  total_balance = 0;
  open_balance = 0;
  dateFormat = 'dd-MM-yyyy';

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
    this.mainService.spinning.emit(true);
    this.mainService.getStatement(requestBody).subscribe(
      (data: any) => {
        this.mainService.spinning.emit(false);
        if (data && data.statement && data.statement.length > 0) {
          this.statement = data.statement;
          this.total_bill_amount = data.total_bill_amount;
          this.total_collected_amount = data.total_collected_amount;
          this.total_balance = this.total_bill_amount - this.total_collected_amount;
          this.open_balance = data.open_balance;
        } else {
          this.statement = [];
        }
      },
      err => {
        console.log('get customers err ', err);
        this.message.create('error', err.error.message);
        this.mainService.spinning.emit(false);
      }
    );
  }

  onChange(result: Date[]) {
    if (result && result.length > 0) {
      this.from_date = moment(result[0]).format('DD-MM-YYYY');
      this.to_date = moment(result[1]).format('DD-MM-YYYY');
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
