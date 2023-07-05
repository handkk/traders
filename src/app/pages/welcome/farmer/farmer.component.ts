import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FarmerService } from './farmer.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent {
  validateForm!: UntypedFormGroup;
  customersData: any[] = [];
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
  total = 9;
  pageSize = 5;
  loading = true;

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService,
    private farmerService: FarmerService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null],
      // phoneNumber: [null, [Validators.required, Validators.maxLength(10), Validators.pattern('[7-9]{1}[0-9]{9}')]],
      address: [null],
      notes: [null]
    });
    this.farmerService.getFarmers().subscribe(
      (data: any) => {
        console.log('get farmers ', data);
        const farmers = data;
        this.customersData = farmers;
        this.loading = false;
      },
      err => {
        console.log('get farmers err ', err);
        this.customersData = [];
        this.loading = false;
      }
    );
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.customersData.push({
        name: this.validateForm.value.name,
        phoneNumber: this.validateForm.value.phoneNumber,
        address: this.validateForm.value.address,
        notes: this.validateForm.value.notes
      });
      this.message.create('success', `${this.validateForm.value.name} farmer added Successfully`);
      this.validateForm.controls['name'].reset();
      this.validateForm.controls['phoneNumber'].reset();
      this.validateForm.controls['address'].reset();
      this.validateForm.controls['notes'].reset();
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
