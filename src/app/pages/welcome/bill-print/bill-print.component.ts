import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

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

  constructor(
    private mainService: MainService
  ) {}

  ngOnInit() {
    const today_date: Date = new Date();
    this.day = today_date.getDay();
    this.todayDate = today_date.getUTCDate() + '/' + (today_date.getUTCMonth() + 1) + '/' + today_date.getUTCFullYear();
    this.getbalance_statement();
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

}
