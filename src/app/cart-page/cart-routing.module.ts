import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';

const routes: Routes = [
  {path:'',component:CartParentComponent},
  {path:'AddToCart',component:CartParentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
