import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';
import {Task} from 'protractor/built/taskScheduler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_URL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.API_URL}/${id}`);
  }

  createTask(task: Todo): Observable<void> {
    return this.http.post<void>(this.API_URL, task);
  }

  editTask(id: number, task: Todo): Observable<void>{
    return this.http.put<void>(`${this.API_URL}/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
