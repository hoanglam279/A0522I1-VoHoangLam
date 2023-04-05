import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductRoutingModule} from './product/product-routing.module';
import {CategoryRoutingModule} from './category/category-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule, CategoryRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
