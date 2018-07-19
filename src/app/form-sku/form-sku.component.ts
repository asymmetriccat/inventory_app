import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
})
export class FormSkuComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku= this.myForm.controls['sku'];
  }
  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('you submitted value:', value);
  }
}
