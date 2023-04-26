import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PackageListComponent} from "./package-list/package-list.component";
import {PackageCreateComponent} from "./package-create/package-create.component";
import {PackageEditComponent} from "./package-edit/package-edit.component";


const routes: Routes = [
  {path: "", component: PackageListComponent},
  {path: "package-list", component: PackageListComponent},
  {path: "package-create", component: PackageCreateComponent},
  {path: "package-edit/:id", component: PackageEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
