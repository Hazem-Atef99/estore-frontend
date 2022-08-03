import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PreloaderComponent } from './Components/preloader/preloader.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ]
})
export class SharedModule { }
