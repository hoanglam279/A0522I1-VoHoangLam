import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PackageService} from "../../../service/package.service";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";
import {checkDate} from "../validator";
import {Package} from "../../../model/package";

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.css']
})
export class PackageCreateComponent implements OnInit {
  products: Product[] = [];
  packageForm: FormGroup;
  newPackage: Package = {};


  constructor(private packageService: PackageService, private productService: ProductService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.packageForm = this.fb.group({
      packageCode: ['', [Validators.required, Validators.pattern('^LH\\-[0-9]{4}')]],
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      dateGroup: this.fb.group({
        inDate: ['', [Validators.required]],
        outDate: ['', [Validators.required]],
        expDate: ['', [Validators.required]]
      }, {validator: checkDate}
      )
    })
  }

  submit() {
    let pck = this.packageForm.value;
    this.productService.findById(Number(pck.product)).subscribe(product => {
      this.newPackage.packageCode = pck.packageCode;
      this.newPackage.product = product;
      this.newPackage.quantity = pck.quantity;
      this.newPackage.inDate = pck.dateGroup.inDate;
      this.newPackage.outDate = pck.dateGroup.outDate;
      this.newPackage.expDate = pck.dateGroup.expDate;

      this.packageService.savePackage(this.newPackage).subscribe(
        () => {
        },
        () => {
        },
        () => this.router.navigateByUrl('/package-list')
      )
    })
  }

  private getAllProducts() {
    this.productService.getAll().subscribe(products => this.products = products.content);
  }
}
