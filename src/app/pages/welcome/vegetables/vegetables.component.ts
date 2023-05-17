import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent {
  validateForm!: UntypedFormGroup;
  vegetablesData: any[] = [
    {
      number: 1,
      name: 'Potato',
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
      number: [null, [Validators.required]],
      notes: [null]
    });
    setTimeout(() => {
      this.loading = false;
      const number = this.vegetablesData.length + 1;
      this.validateForm.controls['number'].setValue(number);
    }, 3500);
  }

  clearfield(input: string) {
    this.validateForm.controls[input].reset();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.vegetablesData.push({
        name: this.validateForm.value.name,
        number: this.validateForm.value.number,
        notes: this.validateForm.value.notes
      });
      this.message.create('success', `${this.validateForm.value.name} vegetable added Successfully`);
      this.validateForm.controls['name'].reset();
      this.validateForm.controls['number'].reset();
      this.validateForm.controls['notes'].reset();
      const number = this.vegetablesData.length + 1;
      this.validateForm.controls['number'].setValue(number);
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
