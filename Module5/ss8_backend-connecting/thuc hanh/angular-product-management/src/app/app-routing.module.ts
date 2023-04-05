import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {CategoryEditComponent} from "./category/category-edit/category-edit.component";


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'category/list', component: CategoryListComponent},
  {path: 'category/create', component: CategoryCreateComponent},
  {path: 'category/edit/:id', component: CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
