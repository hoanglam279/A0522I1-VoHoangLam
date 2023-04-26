import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";
import {PackageRoutingModule} from "../package/package-routing.module";



@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PackageRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
