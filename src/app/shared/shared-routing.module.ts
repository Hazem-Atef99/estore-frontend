import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriParentComponent } from '../categoriPage/Components/categori-parent/categori-parent.component';
import { HomeParentComponent } from '../home/Components/home-parent/home-parent.component';
import { ProductListParentComponent } from '../productList/Components/product-list-parent/product-list-parent.component';

const routes: Routes = [
  {path:" ",component:HomeParentComponent},
  {path:"home",component:HomeParentComponent},
  {path:"Catagori",component:CategoriParentComponent},
  {path:"ProductList",component:ProductListParentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
