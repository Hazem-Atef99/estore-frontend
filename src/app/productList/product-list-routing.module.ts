import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListParentComponent } from './Components/product-list-parent/product-list-parent.component';

const routes: Routes = [
  {path:'',component:ProductListParentComponent},
  {path:'ProductList',component:ProductListParentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
