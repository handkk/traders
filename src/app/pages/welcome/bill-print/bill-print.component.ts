import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import * as moment from 'moment';
import { concatMap, finalize, map, of } from 'rxjs';

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
  breakCount: number = 10; // if u want max 3 set 2 , if u want 10 recourd set 9
  finalArray: any[] = [];
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    const today_date: Date = new Date();
    this.day = this.date.getDay();
    this.todayDate = moment(today_date).format('DD-MM-YYYY');
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
      dataObject.records.forEach((re: any, ind: number) => {
        re['no'] = ind + 1;
      })
      // if (dataObject.records.length > 20 && dataObject.records.length < 30) {
      //   console.log('this.breakCount: ', this.breakCount);
      //   let firstPart = dataObject.records.slice(0, this.breakCount)
      //   let secondPart = dataObject.records.slice(9)
      //   let thirdPart = dataObject.records.slice(18)
      //   let firstData = { ...dataObject }
      //   firstData.records = firstPart;
      //   let secondData = { ...dataObject }
      //   secondData.records = secondPart;
      //   let thirdData = { ...dataObject }
      //   thirdData.records = thirdPart;
      //   secondData.total_amount = this.returnSum(secondData.records);
      //   firstData.total_amount = this.returnSum(firstData.records);
      //   thirdData.total_amount = this.returnSum(thirdData.records);
      //   // if (dataObject.records.length > 9) {
      //   //   firstData['continue'] = 'Continue...';
      //   // }
      //   // if (dataObject.records.length > 18) {
      //   //   secondData['continue'] = '';
      //   //   secondData['second'] = '(ii)';
      //   // }
      //   // if (dataObject.records.length > 27) {
      //   //   console.log('second');
      //   //   secondData['continue'] = '';
      //   //   secondData['second'] = '(ii)';
      //   //   secondData['third'] = '(iii)';
      //   // }
      //   filteredArray.push(firstData);
      //   filteredArray.push(secondData);
      //   filteredArray.push(thirdData);
      // }
      if (dataObject.records.length > this.breakCount + 1) {
        let firstPart = dataObject.records.slice(0, this.breakCount)
        let secondPart = dataObject.records.slice(this.breakCount)
        let firstData = { ...dataObject }
        firstData.records = firstPart;
        if (dataObject.records.length > 9) {
          firstData['continue'] = 'Continue...';
        }
        let secondData = { ...dataObject }
        secondData.records = secondPart;
        if (dataObject.records.length > 18) {
          secondData['continue'] = '';
        }
        secondData.total_amount = this.returnSum(secondData.records);
        firstData.total_amount = this.returnSum(firstData.records);
        filteredArray.push(firstData);
        filteredArray.push(secondData);
      } else {
        dataObject['total_amount'] = this.returnSum(dataObject.records);
        filteredArray.push(dataObject)
      }
    })
    this.finalArray = filteredArray
    let hasCollectionExceedingLimit = filteredArray.some((item) => item.records.length > this.breakCount + 1);
    if (hasCollectionExceedingLimit) {
      this.maxRecordsCount(this.finalArray)
    } else {
      this.mainService.spinning.emit(false);
    }
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
    this.mainService.spinning.emit(true);
    this.mainService.printCustomerBills(requestBody).subscribe(
      (data: any) => {
        this.mainService.spinning.emit(false);
        if (data && data.length > 0) {
          this.printData = data;
          if (this.printData) {
            this.mainService.spinning.emit(true);
            of(...this.printData).pipe(
              concatMap((item: any) =>
                this.mainService.getCollectionsByCustomerId(item.customer_id).pipe(
                  map((data: any) => ({ item, data })),
                )
              ),
              finalize(() => {
                this.maxRecordsCount(data)
              })
            ).subscribe((collection) => {
              collection.item['collectionData']=collection.data

            })
            // this.printData.forEach((item, index) => {
            //   item['fromBackend'] = true
            //   this.mainService.getCollectionsByCustomerId(item.customer_id).subscribe((collection: any) => {
            //     item['collectionData'] = collection

            //   })

            // })

          }

        } else {
          this.finalArray = [];
        }
        this.mainService.spinning.emit(false);
      },
      err => {
        console.log('get customers err ', err);
        this.mainService.spinning.emit(false);
      }
    );
  }

  onChange(result: any): void {
    this.printCustomerBills();
  }

}
