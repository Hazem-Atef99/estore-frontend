import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';
import { CartAreaComponent } from './Components/cart-area/cart-area.component';
import { CartSliderComponent } from './Components/cart-slider/cart-slider.component';


@NgModule({
  declarations: [
    CartParentComponent,
    CartAreaComponent,
    CartSliderComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
