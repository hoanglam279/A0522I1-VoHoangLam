import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}`);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/${id}`);
  }
  createCategory(category: Category): Observable<void>{
    return this.http.post<void>(`${this.API_URL}`,category);
  }

  editCategory(id: number, category: Category): Observable<void>{
    return this.http.put<void>(`${this.API_URL}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  search(text: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.API_URL}?q=${text}`)
  }
}
