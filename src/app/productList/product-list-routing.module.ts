import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartParentComponent } from '../cart-page/Components/cart-parent/cart-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListParentComponent } from './Components/product-list-parent/product-list-parent.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListParentComponent},
  {path:'ProductList',component:ProductListParentComponent},
  {path:'ProductDetails/:productID',component:ProductDetailsComponent},
  {path:'AddToCart',component:CartParentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule { }
