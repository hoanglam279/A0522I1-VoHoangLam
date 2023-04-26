import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  API_URL = 'http://localhost:3000/car';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.API_URL);
  }

  create(car: Car) {
    return this.http.post<Car>(this.API_URL, car);
  }

  findById(id: number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.API_URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  update(id: number, car: Car) {
    return this.http.put(`${this.API_URL}/${id}`, car);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.API_URL + '?name_like=' + nameSearch);
  }
}
