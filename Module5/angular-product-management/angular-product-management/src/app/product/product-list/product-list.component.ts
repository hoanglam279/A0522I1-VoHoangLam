import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,private router : Router) {
    productService.getAll().subscribe(next=>{
      this.products=next;
    });
  }

  ngOnInit() {
  }

  DeleteProduct(id: number) {
    console.log(id);
    this.productService.deleteById(id).subscribe(next=>{
      this.products=this.products.filter(eachProduct=>eachProduct.id!==id)
    });
    this.router.navigateByUrl("product/list");
  }
  name:string;
  id:number;
  Xoa(name: string, id: number) {
    this.name=name;
    this.id=id;
  }
}
