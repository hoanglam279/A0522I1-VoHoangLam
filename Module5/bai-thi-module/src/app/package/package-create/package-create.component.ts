import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IProduct} from "../../models/IProduct";
import {ProductService} from "../../service/product.service";
import {PackageService} from "../../service/package.service";
import {Router} from "@angular/router";
import {identityRevealedValidator} from "./custom-validate.validator";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.css']
})
export class PackageCreateComponent implements OnInit {
  packageForm: FormGroup;
  products: IProduct[] = [];
  date1 = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
  constructor(
    private productService: ProductService,
    private packageService: PackageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });

    this.packageForm = new FormGroup({
      idPackage: new FormControl('', [Validators.required, Validators.pattern('LH-\\d{4}')]),
      product: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      dateProduct: new FormControl(this.date1, [Validators.required]),
      startDate: new FormControl(this.date1, [Validators.required]),
      endDate: new FormControl(this.date1, [Validators.required]),
    }, identityRevealedValidator);
  }

  createPackage() {
    this.packageService.create(this.packageForm.value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Thêm mới thành công');
        this.router.navigateByUrl('');
      }
    );
  }

}
