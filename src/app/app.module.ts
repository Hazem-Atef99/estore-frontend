import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/Components/footer/footer.component';
import { HeaderComponent } from './shared/Components/header/header.component';
import { PreloaderComponent } from './shared/Components/preloader/preloader.component';
import { ProductListParentComponent } from './productList/Components/product-list-parent/product-list-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    ProductListParentComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
