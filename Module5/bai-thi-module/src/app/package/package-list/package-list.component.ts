import { Component, OnInit } from '@angular/core';
import {IPackage} from "../../models/IPackage";
import {IProduct} from "../../models/IProduct";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {PackageService} from "../../service/package.service";

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  packages: IPackage[] = [];
  products: IProduct[] = [];
  packageTemp: IPackage = {
    product: {}
  };
  page = 1;
  packageSearch: FormGroup;
  totalLength: number;

  constructor(
    private productService: ProductService,
    private packageService: PackageService
  ) {
  }

  ngOnInit(): void {
    this.packageSearch = new FormGroup({
      productId: new FormControl(''),
      endDate: new FormControl(''),
      dateProduct1: new FormControl(''),
      dateProduct2: new FormControl('')
    });
    this.getAll();
  }

  getAll() {
    this.packageService.getAll().subscribe((data) => {
      this.packages = data;
      this.totalLength = data.length;
    });


    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
  }

  showInfo(packages: IPackage) {
    this.packageTemp = packages;
  }

  delete(id: number) {
    this.packageService.delete(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Xoá thành công');
        this.getAll();
      });
  }

  searchPackage() {
    console.log(this.packageSearch.value);
    this.packageService.search(
      this.packageSearch.get('productId').value,
      this.packageSearch.get('endDate').value,
      this.packageSearch.get('dateProduct1').value,
      this.packageSearch.get('dateProduct2').value
    ).subscribe(
      (data) => {
        this.packages = data;
        this.totalLength = data.length;
        this.page = 1;
      }
    );
  }
}
