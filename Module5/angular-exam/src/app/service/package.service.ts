import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Package} from "../model/package";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  API_URL_JSON = "http://localhost:3000/packages";
  API_URL = "http://localhost:8080/packages";

  constructor(private http: HttpClient) {
  }

  getAll(currentPage, itemsPerPage): Observable<Response> {
    return this.http.get<Response>(`${this.API_URL}?page=${currentPage}&size=${itemsPerPage}`);
  }


  savePackage(pck: Package): Observable<void> {
    return this.http.post<void>(`${this.API_URL}`, pck);
  }

  updateById(id, updatedPackage): Observable<void> {
    return this.http.patch<void>(`${this.API_URL}/${id}`, updatedPackage);
  }

  findById(id: number): Observable<Package> {
    return this.http.get<Package>(`${this.API_URL}/${id}`);
  }

  deletePackage(id): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
  //Search JSON
  // search(name, outDate, inDate, expDate): Observable<Package[]> {
  //   return this.http.get<Package[]>(`${this.API_URL}?product.name_like=${name}&outDate_like=${outDate}&inDate_like=${inDate}&expDate_like=${expDate}`);
  // }

  //Search Spring BE
  search(name, outDate, inDate, expDate, currentPage, itemsPerPage): Observable<Response> {
    console.log(`${this.API_URL}/search?name=${name}&outDate=${outDate}&inDate=${inDate}&expDate=${expDate}&page=${currentPage}&size=${itemsPerPage}`);
    return this.http.get<Response>(`${this.API_URL}/search?name=${name}&outDate=${outDate}&inDate=${inDate}&expDate=${expDate}&page=${currentPage}&size=${itemsPerPage}`);
  }
}

interface Response {
  content: Package[];
  totalElements: number;
}
