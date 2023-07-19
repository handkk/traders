import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MainService } from '../../main.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent {
  validateForm!: UntypedFormGroup;
  vegetablesData: any[] = [];
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
  vegId: string = '';

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private mainService: MainService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      number: [null, [Validators.required]],
      notes: [null]
    });
    this.getAllVegetables();
  }

  getAllVegetables() {
    this.vegetablesData = [];
    this.loading = true;
    const requestBody = {
      'skip': this.index,
      'limit': this.pageSize
    };
    this.mainService.getVegetables(requestBody).subscribe(
      (data: any) => {
        const vegetables = data.data;
        this.vegetablesData = vegetables;
        this.total = data.total;
        this.loading = false;
        this.validateForm.controls['number'].setValue(this.total + 1);
        document.getElementById('vegetableName')?.focus();
      },
      err => {
        console.log('get customers err ', err);
        this.vegetablesData = [];
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
        number: this.validateForm.value.number,
        notes: this.validateForm.value.notes
      };
      if (this.edit) {
        this.mainService.updateVegetable(this.vegId, requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} vegetable updated Successfully`);
            this.validateForm.controls['name'].reset();
            this.validateForm.controls['number'].reset();
            this.validateForm.controls['notes'].reset();
            const number = this.vegetablesData.length + 1;
            this.validateForm.controls['number'].setValue(number);
            this.loading = true;
            this.edit = false;
            this.getAllVegetables();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.getAllVegetables();
          }
        );
      } else {
        this.mainService.addVegetable(requestBody).subscribe(
          (data: any) => {
            this.message.create('success', `${this.validateForm.value.name} vegetable added Successfully`);
            this.validateForm.controls['name'].reset();
            this.validateForm.controls['number'].reset();
            this.validateForm.controls['notes'].reset();
            const number = this.vegetablesData.length + 1;
            this.validateForm.controls['number'].setValue(number);
            this.loading = true;
            this.getAllVegetables();
          },
          err => {
            console.log('get customers err ', err);
            this.loading = false;
            this.getAllVegetables();
          }
        );
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  reset() {
    this.validateForm.controls['name'].setValue(null);
    this.validateForm.controls['name'].updateValueAndValidity();
    this.validateForm.controls['notes'].reset();
    const number = this.vegetablesData.length + 1;
    this.validateForm.controls['number'].setValue(number);
  }

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

  exportToPDF() {
    let data: any = [];
    this.vegetablesData.forEach(veg => {
      data.push({
        'Number': veg.number,
        'Name': veg.name,
        'Notes': veg.notes
      })
    })
    this.exportJsonAsExcelFile(data, 'vegetables');
  }

  confirm(id: string) {
    this.mainService.removeVegetable(id).subscribe(
      (data: any) => {
        this.loading = false;
        if (data && data.success) {
          this.message.create('success', data.message);
          this.getAllVegetables();
        }
      },
      err => {
        console.log('get customers err ', err);
        this.loading = false;
      }
    );
  }

  cancel() {}

  editVeg(data: any) {
    this.edit = true;
    this.vegId = data._id;
    this.validateForm.controls['number'].setValue(data.number);
    this.validateForm.controls['name'].setValue(data.name);
    this.validateForm.controls['notes'].setValue(data.notes);
  }

  onPageSizeChange(event: any) {
    this.pageSize = event;
    this.getAllVegetables();
  }

  onPageChange(event: any) {
    this.index = event;
    this.getAllVegetables();
  }
}
