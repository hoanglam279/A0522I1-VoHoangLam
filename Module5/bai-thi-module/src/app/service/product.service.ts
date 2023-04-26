import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly URI: string = 'http://localhost:3000/products';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.URI);
  }

  findById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.URI + '/' + id);
  }

  create(product: IProduct): Observable<void> {
    return this.httpClient.post<void>(this.URI, product);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }
}
