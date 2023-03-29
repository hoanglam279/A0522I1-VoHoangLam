import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
   deleteId: number;
   deleteName: string;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.products = this.product.getAll();
  }
  productList() {
    return this.product.getAll();
  }
  deleteCustomer(temp: Product) {
     this.deleteId = temp.id;
     this.deleteName = temp.name;
  }
  delete(idDelete: any) {
     this.product.delete(idDelete);
     this.ngOnInit();
  }
}
