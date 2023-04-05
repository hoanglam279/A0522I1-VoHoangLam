import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {}, () => {}, () => this.router.navigate(['/product/list']));
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categories => this.categories = categories);
  }
}
