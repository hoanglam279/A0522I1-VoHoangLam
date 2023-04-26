import { Component, OnInit } from '@angular/core';
import {PackageService} from "../../../service/package.service";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../model/product";
import {Package} from "../../../model/package";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {checkDate} from "../validator";

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {
  products: Product[] = [];
  id: number;
  packageForm: FormGroup;
  updatePackage: Package = {};

  constructor(private packageService: PackageService, private productService: ProductService, private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    this.getAllProduct();
    this.activatedRoute.paramMap.subscribe(paramMap => {
     this.id = Number(paramMap.get('id'));
     this.packageService.findById(this.id).subscribe(pck => {
       this.packageForm = this.fb.group({
         id: this.id,
         packageCode: [pck.packageCode, [Validators.required, Validators.pattern('^LH\\-[0-9]{4}')]],
         product: [pck.product.id, [Validators.required]],
         quantity: [pck.quantity, [Validators.required, Validators.min(0)]],
         dateGroup: this.fb.group({
             inDate: [pck.inDate, [Validators.required]],
             outDate: [pck.outDate, [Validators.required]],
             expDate: [pck.expDate, [Validators.required]]
           }, {validator: checkDate}
         )
       });
     });
    });
  }

  getAllProduct() {
    this.productService.getAll().subscribe(products => {
      this.products = products.content;
    })
  }

  submit() {
    let pck = this.packageForm.value;
    this.productService.findById(Number(pck.product)).subscribe(product => {
      this.updatePackage.id = pck.id;
      this.updatePackage.packageCode = pck.packageCode;
      this.updatePackage.product = product;
      this.updatePackage.quantity = pck.quantity;
      this.updatePackage.inDate = pck.dateGroup.inDate;
      this.updatePackage.outDate = pck.dateGroup.outDate;
      this.updatePackage.expDate = pck.dateGroup.expDate;

      this.packageService.updateById(this.id, this.updatePackage).subscribe(
        () => {
        },
        () => {
        },
        () => this.router.navigateByUrl('/package-list')
      )
    })
  }
}
