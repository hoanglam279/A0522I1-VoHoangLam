import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteProduct: Product = {};
  config: any;
  categories: Category[] = [];
  searchForm: FormGroup;

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      name: '',
      categoryId: '',
      price: ''
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAll();
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.products.length
    };

  }

  private getAll() {
    this.productService.getAll().subscribe(products => this.products = products);
  }

  delModal(product: Product) {
    this.deleteProduct = product;
  }

  delProduct() {
    this.productService.deleteProduct(this.deleteProduct.id).subscribe(() => this.getAll());
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categories => this.categories = categories);
  }

  search() {
    const check = this.searchForm.value;
    console.log(check);
    this.productService.search(check.name, check.price, check.categoryId).subscribe(products => {this.products = products;
    this.config.currentPage = 1;}
  )
    ;
  }

}
