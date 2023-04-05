import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FacilityComponent } from './facility/facility.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';
import { CreateNewFacilityComponent } from './create-new-facility/create-new-facility.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { CustomerUseFacilityComponent } from './customer-use-facility/customer-use-facility.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ContractCreateComponent } from './contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FacilityComponent,
    EditFacilityComponent,
    CreateNewFacilityComponent,
    CustomerListComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ContractListComponent,
    CustomerUseFacilityComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
