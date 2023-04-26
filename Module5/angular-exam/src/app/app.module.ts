import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./component/layout/layout.module";
import {NotifierModule} from "angular-notifier";
import {HttpClientModule} from "@angular/common/http";
import {PackageModule} from "./component/package/package.module";
import {ProductModule} from "./component/product/product.module";
import {ProductRoutingModule} from './component/product/product-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NotifierModule,
    HttpClientModule,
    PackageModule,
    ProductModule,
    ProductRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
