import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient :HttpClient) { }
  products: Product[];
  getAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product");
  }
  saveProduct(product:Product): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:3000/product",product);
  }

  findProductById(id: number): Observable<Product> {
    const url='http://localhost:3000/product';
    return this.httpClient.get<Product>(`http://localhost:3000/product/${id}`).pipe(tap(_=>console.log('find product by id = '+id)),
      catchError(error => of (null)));
  }

  updateProduct(product: Product):Observable<Product[]> {
    const url='http://localhost:3000/product'+'/'+product.id;
    return this.httpClient.patch<Product>(url,product).pipe(tap(_=>console.log('update product by id = '+product.id)),
      catchError(error => of (null)));
  }

  deleteById(id: number):Observable<Product[]> {
    const url='http://localhost:3000/product'+'/'+id;
    return this.httpClient.delete<Product>(url).pipe(tap(_=>console.log(`delete product by id = ${id}`)),
      catchError(error => of (null)));
  }
}
