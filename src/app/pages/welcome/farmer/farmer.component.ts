import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FarmerService } from './farmer.service';
import { MainService } from '../../main.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent {
  validateForm!: UntypedFormGroup;
  farmersData: any[] = [];
  sort = ['ascend'];
  listOfColumns = [
    {
      name: 'Name'
    },
    {
      phoneNumber: 'Phone Number'
    },
    {
      address: 'Address'
    },
    {
      notes: 'Note'
    }
  ];
  index = 1;
  total = 0;
  pageSize = 10;
  loading = true;
  edit = false;
  farmerId: string = '';

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private farmerService: FarmerService,
    private mainService: MainService,
    private router: Router
    ) {
      let userinfo: any = sessionStorage.getItem('userinfo');
      if (!userinfo) {
        sessionStorage.clear();
        this.message.create('warning', 'User session expired please login');
        this.router.navigateByUrl('/login');
      }
    }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null],
      address: [null],
      notes: [null]
    });
    this.getAllFarmers();
  }

  getAllFarmers() {
    this.loading = true;
    const requestBody = {
      'skip': this.index,
      'limit': this.pageSize
    };
    document.getElementById('farmerName')?.focus();
    this.farmerService.getFarmers(requestBody).subscribe(
      (data: any) => {
        const farmers = data.data;
        this.farmersData = farmers;
        this.total = data.total;
        this.loading = false;
      },
      err => {
        console.log('get farmers err ', err);
        this.farmersData = [];
        this.loading = false;
      }
    );
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const requestBody = {
        name: this.validateForm.value.name,
        phone_number: this.validateForm.value.phoneNumber ? parseInt(this.validateForm.value.phoneNumber) : null,
        address: this.validateForm.value.address,
        notes: this.validateForm.value.notes
      };
      this.mainService.spinning.emit(true);
      if (this.edit) {
        this.mainService.updateFarmer(this.farmerId, requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} farmer updated Successfully`);
            this.reset();
            this.loading = true;
            this.edit = false;
            this.mainService.spinning.emit(false);
            this.getAllFarmers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.mainService.spinning.emit(false);
            this.getAllFarmers();
          }
        );
      } else {
        this.mainService.createFarmer(requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} farmer added Successfully`);
            this.reset();
            this.loading = true;
            this.mainService.spinning.emit(false);
            this.getAllFarmers();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.mainService.spinning.emit(false);
            this.getAllFarmers();
          }
        );
      }
    } else {
      this.mainService.spinning.emit(false);
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  editFarmer(data: any) {
    this.edit = true;
    this.farmerId = data._id;
    this.validateForm.controls['phoneNumber'].setValue(data.phone_number);
    this.validateForm.controls['name'].setValue(data.name);
    this.validateForm.controls['notes'].setValue(data.notes);
    this.validateForm.controls['address'].setValue(data.address);
  }

  confirm(id: any) {
    this.mainService.removeFarmer(id).subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.success) {
          this.message.create('success', data.message);
          this.getAllFarmers();
        }
      },
      err => {
        console.log('get customers err ', err);
        this.loading = false;
      }
    );
  }

  cancel() {}

  public exportJsonAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public exportTableAsExcelFile(table: HTMLElement, excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + new Date().getTime() + EXCEL_EXTENSION);
  }

  exportToExcel() {
    let data: any = [];
    this.farmersData.forEach(f => {
      data.push({
        'Name': f.name,
        'Phone Number': f.phone_number,
        'Address': f.address,
        'Notes': f.notes
      })
    })
    this.exportJsonAsExcelFile(data, 'farmers');
  }

  reset() {
    this.validateForm.controls['name'].reset();
    this.validateForm.controls['phoneNumber'].reset();
    this.validateForm.controls['address'].reset();
    this.validateForm.controls['notes'].reset();
    this.edit = false;
  }

  onPageSizeChange(event: any) {
    this.pageSize = event;
    this.getAllFarmers();
  }

  onPageChange(event: any) {
    this.index = event;
    this.getAllFarmers();
  }
}
