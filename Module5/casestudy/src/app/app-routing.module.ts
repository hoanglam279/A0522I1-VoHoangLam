import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from "./facility/facility.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {ContractListComponent} from "./contract-list/contract-list.component";


const routes: Routes = [
  {path: 'facility', component: FacilityComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'contract', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
