import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPackage} from "../models/IPackage";

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  readonly URI: string = 'http://localhost:3000/packages';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<IPackage[]> {
    return this.httpClient.get<IPackage[]>(this.URI);
  }

  findById(id: number): Observable<IPackage> {
    return this.httpClient.get<IPackage>(this.URI + '/' + id);
  }

  create(packages: IPackage): Observable<void> {
    return this.httpClient.post<void>(this.URI, packages);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URI + '/' + id);
  }

  search(name: string, endDate: string, dateProduct1: string, dateProduct2: string): Observable<IPackage[]> {
    if (dateProduct1 == '' || dateProduct2 == '') {
      return this.httpClient.get<IPackage[]>(this.URI + '?product.id_like=' + name + '&endDate_like=' + endDate);
    }
    return this.httpClient.get<IPackage[]>(this.URI + '?product.id_like=' + name + '&endDate_like=' + endDate + '&dateProduct_gte=' + dateProduct1 + '&dateProduct_lte=' + dateProduct2);
  }
}
