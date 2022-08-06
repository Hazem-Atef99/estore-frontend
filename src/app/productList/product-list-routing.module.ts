import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'ProductList',component:ProductListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
