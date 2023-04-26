import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL_JSON = "http://localhost:3000/products";
  API_URL = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Response> {
    return this.http.get<Response>(`${this.API_URL}`);
  }
  saveProduct(product): Observable<void> {
    return this.http.post<void>(`${this.API_URL}`, product);
  }
  updateById(id, updatedProduct): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/${id}`, updatedProduct);
  }
  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }
  deleteProduct(id): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}

interface Response {
  content: Product[];
  totalElements: number;
}
