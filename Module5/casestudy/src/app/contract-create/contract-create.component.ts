import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
contractForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.contractForm = this.fb.group({
      contractId:['',[Validators.required]],
      startDate:['',[Validators.required]],
      endDate:['',[Validators.required]],
      deposit:['',[Validators.required, Validators.min(0)]],
      totalMoney: ['',[Validators.required, Validators.min(0)]],
      employee:['',[Validators.required]],
      customer:['',[Validators.required]],
      service:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submit() {

  }
}
