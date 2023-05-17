import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent {
  validateForm!: UntypedFormGroup;
  customersData: any[] = [
    {
      name: 'Rajesh',
      phoneNumber: '9533993043',
      address: 'PDPL',
      notes: ''
    }
  ];
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

  constructor(private fb: UntypedFormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      phoneNumberPrefix: ['+91'],
      phoneNumber: [null],
      // phoneNumber: [null, [Validators.required, Validators.maxLength(10), Validators.pattern('[7-9]{1}[0-9]{9}')]],
      address: [null],
      notes: [null]
    });
    setTimeout(() => {
      this.loading = false;
    }, 3500);
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
      this.message.create('success', `${this.validateForm.value.name} Customer added Successfully`);
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
