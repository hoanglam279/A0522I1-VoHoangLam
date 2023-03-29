import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  id:number;
  product: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.editForm = this.fb.group({
      id: '',
      name: '',
      price: '',
      description: ''
    })
  }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.product = this.productService.findById(this.id);
    this.setValue();
  }


  editProduct() {
    let updatedProduct = this.editForm.value;
    this.productService.updateById(this.id, updatedProduct);
    this.router.navigate(['/product/list'])
  }
  setValue() {
    this.editForm.controls['id'].setValue(this.id);
    this.editForm.controls['name'].setValue(this.product.name);
    this.editForm.controls['price'].setValue(this.product.price);
    this.editForm.controls['description'].setValue(this.product.description);
  }
}
