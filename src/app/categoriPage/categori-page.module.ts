import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriPageRoutingModule } from '../categoriPage/categori-page-routing.module';
import { RouterModule } from '@angular/router';
import { CategoriParentComponent } from './Components/categori-parent/categori-parent.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { LatestOffersComponent } from './Components/latest-offers/latest-offers.component';
import { LatestProductAreaComponent } from './Components/latest-product-area/latest-product-area.component';
import { ShopMethodComponent } from './Components/shop-method/shop-method.component';



@NgModule({
  declarations: [
    CategoriParentComponent,
    GalleryComponent,
    LatestOffersComponent,
    LatestProductAreaComponent,
    ShopMethodComponent
  ],
  imports: [
    CommonModule,
    CategoriPageRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class CategoriPageModule { }
