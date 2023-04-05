import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'task-create', component: TodoCreateComponent},
  {path: 'task-edit/:id', component: TodoEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
