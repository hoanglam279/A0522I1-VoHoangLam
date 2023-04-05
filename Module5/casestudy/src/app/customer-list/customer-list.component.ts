// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer";

// @ts-ignore
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [
    {customerId: 1, customerType: 1, birthday: "1/1/1990", name: "Nguyen A", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 2, customerType: 1, birthday: "1/1/1990", name: "Nguyen B", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 3, customerType: 1, birthday: "1/1/1990", name: "Nguyen C", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 4, customerType: 1, birthday: "1/1/1990", name: "Nguyen D", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 5, customerType: 1, birthday: "1/1/1990", name: "Nguyen E", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 6, customerType: 1, birthday: "1/1/1990", name: "Nguyen F", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 7, customerType: 1, birthday: "1/1/1990", name: "Nguyen G", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 8, customerType: 1, birthday: "1/1/1990", name: "Nguyen H", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 9, customerType: 1, birthday: "1/1/1990", name: "Nguyen I", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
    {customerId: 10, customerType: 1, birthday: "1/1/1990", name: "Nguyen J", address: "address", email: "email", gender: 1, idCard: "011111", phone: "0907364643"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
