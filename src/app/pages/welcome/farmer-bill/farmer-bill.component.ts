import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import * as moment from 'moment';
import { FarmerService } from '../farmer/farmer.service';

@Component({
  selector: 'app-farmer-bill',
  templateUrl: './farmer-bill.component.html',
  styleUrls: ['./farmer-bill.component.css']
})
export class FarmerBillComponent implements OnInit {
  finalArray: any[] = [];
  date = new Date();
  day = 0;
  todayDate = '';
  selectedFarmer: any;
  farmersData: any[] = [];
  
  constructor(
    private mainService: MainService,
    private farmerService: FarmerService
  ) { }

  ngOnInit() {
    const today_date: Date = new Date();
    this.day = this.date.getDay();
    this.todayDate = moment(today_date).format('DD-MM-YYYY');
    this.getFarmers();
  }

  getFarmers() {
    const requestBody = {};
    this.mainService.spinning.emit(true);
    this.farmerService.getFarmers(requestBody).subscribe(
      (data: any) => {
        const customers = data.data;
        this.mainService.spinning.emit(false);
        this.farmersData = customers;
      },
      err => {
        console.log('get customers err ', err);
        this.mainService.spinning.emit(false);
        this.farmersData = [];
      }
    );
  }

  printFarmerBills() {
    this.day = this.date.getDay();
    const new1 = moment(this.date).format('DD-MM-YYYY')
    const requestBody = {
      'bill_date': new1,
      'farmer_id': this.selectedFarmer._id
    };
    this.mainService.spinning.emit(true);
    this.mainService.getFarmerBills(requestBody).subscribe(
      (data: any) => {
        console.log('data: ', data);
        if (data && data.length > 0) {
          this.mainService.spinning.emit(false);
          this.finalArray = data;
          console.log('this.finalArray: ', this.finalArray);
        } else {
          this.finalArray = [];
          this.mainService.spinning.emit(false);
        }
      },
      err => {
        console.log('get customers err ', err);
        this.mainService.spinning.emit(false);
      }
    );
  }

  onChange(result: any): void {
    this.finalArray = [];
  }

  print() {
    window.print();
  }

  onFarmerSelect(event: any) {
    this.finalArray = [];
  }
}
