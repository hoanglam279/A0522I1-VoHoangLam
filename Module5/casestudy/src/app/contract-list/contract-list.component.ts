import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [
    {contractId: 1, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 2, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 3, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 4, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 5, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 6, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 7, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 8, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 9, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 10, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 11, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 12, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 13, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
    {contractId: 14, startDate: '1/1/2022', endDate: '5/1/2022', deposit: 1000, totalMoney: 5000, customer: 1, employee: 1, service: 2},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
