import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import { CategoryListComponent } from './category/category-list/category-list.component';
import {ProductService} from "./service/product.service";
import {CategoryService} from "./service/category.service";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
