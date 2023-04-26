import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
productForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: '',
      source: '',
      price: '',
      unit: '',
      image: ''
    })
  }

  submit() {
            const product = this.productForm.value;
            this.productService.saveProduct(product).subscribe(
              () => {},
              () => {},
              () => this.router.navigateByUrl("/package-list")
              )
  }
}
