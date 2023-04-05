import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  taskForm: FormGroup;
  id: number;
  task: Todo;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.taskForm = this.fb.group({
      id: '', content: '', complete: ''
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.todoService.findById(this.id).subscribe((task) => {
        this.task = task;
        this.setValue();
      });
    });
  }

  editTask() {
    const updatedTask = this.taskForm.value;
    if (updatedTask.complete === '1') {
      updatedTask.complete = true;
    } else if (updatedTask.complete === '0') {
      updatedTask.complete = false;
    }
    this.todoService.editTask(this.id, updatedTask).subscribe(() => {
    }, () => {
    }, () => {
      this.router.navigateByUrl('');
    });
  }

  setValue() {
    this.taskForm.controls['id'].setValue(this.task.id);
    this.taskForm.controls['content'].setValue(this.task.content);
    this.taskForm.controls['complete'].setValue(this.task.complete);
  }
}
