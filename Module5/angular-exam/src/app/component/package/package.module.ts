import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageCreateComponent } from './package-create/package-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { PackageEditComponent } from './package-edit/package-edit.component';


@NgModule({
  declarations: [PackageListComponent, PackageCreateComponent, PackageEditComponent],
  imports: [
    CommonModule,
    PackageRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PackageModule { }
