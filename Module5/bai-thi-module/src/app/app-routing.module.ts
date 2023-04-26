import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PackageListComponent} from "./package/package-list/package-list.component";
import {PackageCreateComponent} from "./package/package-create/package-create.component";


const routes: Routes = [
  {path: '', component: PackageListComponent},
  {path: 'package/create', component: PackageCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
