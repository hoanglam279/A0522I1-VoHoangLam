import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    return this.products.push(product);
  }

  findById(id: number): Product {
    return this.products.find((p) => p.id === id);
  }

  update(id: number, product: Product): void {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  delete(idDelete: any): void {
    this.products = this.products.filter(p => {
      return p.id !== idDelete;
    });
  }
}
