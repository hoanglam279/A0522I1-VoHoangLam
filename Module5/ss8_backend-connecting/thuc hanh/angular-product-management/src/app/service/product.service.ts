import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
API_URL = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}`);
  }
  saveProduct(product): Observable<void> {
    return this.http.post<void>(`${this.API_URL}/`, product);
  }
  updateById(id, updatedProduct): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/${id}`, updatedProduct);
  }
  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }
  deleteProduct(id): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }
  search(name: string, price: number, categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}?name_like=${name}&price=${price}&product.category.id=${categoryId}`);
  }
}
