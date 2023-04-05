import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  content = new FormControl();

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  addTask() {
    const task = this.content.value;
    const todo: Todo = {
      content: task,
      complete: false
    };
    this.todoService.createTask(todo).subscribe(() => {}, () => {}, () => {this.router.navigateByUrl('')});
  }
}
