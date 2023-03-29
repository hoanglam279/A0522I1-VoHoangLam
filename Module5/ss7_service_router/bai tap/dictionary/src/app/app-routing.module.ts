import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from './component/dictionary/dictionary.component';
import {DictionaryDetailComponent} from './component/dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  { path: '', component: DictionaryComponent },
  { path: 'detail/:word', component: DictionaryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
