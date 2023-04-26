import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Route, Router, RouterLink} from "@angular/router";
import {Product} from "../../model/product";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  ngOnInit(): void {
  }
  product :Product;
  categorys:Category[]=[];
  message :string='';
  productForm: FormGroup = new FormGroup({
    id: new FormControl('',Validators.min(0)),
    name: new FormControl('',Validators.minLength(6)),
    price: new FormControl('',Validators.min(0)),
    category: new FormControl('',Validators.required),
    description: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  constructor(private productService: ProductService,private router:Router,private categoryService:CategoryService) {
    categoryService.getAll().subscribe(next=>{
      this.categorys=next;
    });

  }
  submit() {
    if(this.productForm.valid){
      this.product = this.productForm.value;
      this.productService.saveProduct(this.product).subscribe(next=>{
          this.productForm.reset();
        }
      );
      this.router.navigateByUrl("product/list");
    }else {
      this.message="bạn phải điền đầy đủ thông tin trước khi tạo";
    }
  }
}
