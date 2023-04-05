import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      customerId: ['', [Validators.required]],
      customerType: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.pattern('([A-Z][a-z]+\\s)+')]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      idCard: ['', [Validators.required, Validators.pattern('^\\d{9}$')]],
      phone: ['', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submit() {

  }
}
