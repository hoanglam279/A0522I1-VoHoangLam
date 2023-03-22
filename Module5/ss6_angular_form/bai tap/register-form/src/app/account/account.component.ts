import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {checkEmail, comparePassword} from './account.validator';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountForm: FormGroup;
  account: Account;
  countries: Array<string> = ['Vietnam', 'China', 'Korea', 'Hongkong', 'Thailand'];

  constructor() {
  }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, checkEmail]),
      password: new FormGroup({
        pass: new FormControl(),
        confirmPass: new FormControl()
      }, comparePassword),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(19)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  createAccount() {
    this.account = this.accountForm.value;
    this.accountForm.reset();
    console.log(this.account);
  }
}
