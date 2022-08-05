import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderAreaComponent } from './Components/slider-area/slider-area.component';
import { CategoryAreaComponent } from './Components/category-area/category-area.component';
import { LatestProductAreaComponent } from './Components/latest-product-area/latest-product-area.component';
import { BestProductAreaComponent } from './Components/best-product-area/best-product-area.component';
import { BestCollectionAreaComponent } from './Components/best-collection-area/best-collection-area.component';
import { LatestOffersComponent } from './Components/latest-offers/latest-offers.component';
import { ShopMethodComponent } from './Components/shop-method/shop-method.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeParentComponent } from './Components/home-parent/home-parent.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SliderAreaComponent,
    CategoryAreaComponent,
    LatestProductAreaComponent,
    BestProductAreaComponent,
    BestCollectionAreaComponent,
    LatestOffersComponent,
    ShopMethodComponent,
    GalleryComponent,
    HomeParentComponent,
 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports:[
    RouterModule,

  ]
})
export class HomeModule { }
