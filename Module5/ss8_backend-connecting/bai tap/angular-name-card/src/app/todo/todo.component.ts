import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getAll();
  }


  // toggleTodo(i: number) {
  //   this.todos[i].complete = !this.todos[i].complete;
  // }
  //
  // change() {
  //   const value = this.content.value;
  //   if (value) {
  //     const todo: Todo = {
  //       id: _id++,
  //       content: value,
  //       complete: false
  //     };
  //     this.todos.push(todo);
  //     this.content.reset();
  //   }
  // }

  getAll() {
    this.todoService.getAllTasks().subscribe(tasks => this.todos = tasks);
  }

  // DELETE FROM DB
  // delete(id: number) {
  //   this.todoService.delete(id).subscribe(() => {}, () => {}, () => this.ngOnInit());
  // }

  // CHANGE TO COMPLETE STATUS ONLY
  delete(id: number) {
    this.todoService.findById(id).subscribe((data) => {
      const task = data;
      task.complete = true;
      this.todoService.editTask(id, task).subscribe(() => {
      }, () => {
      }, () => {
        this.ngOnInit();
      });
    });
  }
}
