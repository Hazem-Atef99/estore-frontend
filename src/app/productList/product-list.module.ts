import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductSliderComponent } from './Components/product-slider/product-slider.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductSliderComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    ProductListRoutingModule
  ],
  exports:[
    RouterModule,

  ]
})
export class ProductListModule { }
