import {Component, OnInit} from '@angular/core';
import {Package} from "../../../model/package";
import {Router} from "@angular/router";
import {PackageService} from "../../../service/package.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {NotifierService} from "angular-notifier";


@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  packages: Package[] = [];
  delPack: Package = {};
  searchForm: FormGroup;
  notifier: NotifierService;
  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  }
  toggle = "allPackage";

  constructor(private noti: NotifierService, private packageService: PackageService, private productService: ProductService, private router: Router, private fb: FormBuilder) {
    this.notifier = noti;
    this.formInit();
  }


  ngOnInit(): void {
    this.getAllPackages();

  }

  private getAllPackages() {
    this.packageService.getAll(this.config.currentPage - 1, this.config.itemsPerPage).subscribe(packages => {
      this.packages = packages.content;
      this.config.totalItems = packages.totalElements
    });
  }

  delModal(pck: Package) {
    this.delPack = pck;
  }

  delpck() {
    this.packageService.deletePackage(this.delPack.id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.ngOnInit();
        this.notifier.notify('success', 'Xoá thành công lô hàng!')
      }
    );
  }

  search() {
    const check = this.searchForm.value;
    this.toggle = "searchPackage";
    this.config.currentPage = 1;

    this.packageService.search(check.productName, check.outDate, check.inDate, check.expDate, this.config.currentPage - 1, this.config.itemsPerPage).subscribe(packages => {
        this.packages = packages.content;
        this.config.totalItems = packages.totalElements;
      }
    )
    ;
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
    this.ngOnInit();
  }

  searchChanged(event: any) {
    this.config.currentPage = event;
    this.search();
  }

  reset() {
    this.toggle = "allPackage";
    this.searchForm.reset();
    this.config.currentPage = 1;
    this.formInit();
    this.ngOnInit();
  }

  formInit() {
    this.searchForm = this.fb.group({
      productName: '',
      outDate: '',
      inDate: '',
      expDate: ''
    });
  }
}
