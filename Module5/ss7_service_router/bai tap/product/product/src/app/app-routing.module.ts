import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './component/list-product/product.component';
import {CreateProductComponent} from './component/create-product/create-product.component';
import {EditProductComponent} from './component/edit-product/edit-product.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list-product'},
  {path: 'list-product', component: ProductComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'update-product/:id', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
