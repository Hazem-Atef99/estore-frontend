import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PreloaderComponent } from './Components/preloader/preloader.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [

    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  exports:[
    RouterModule,

  
  ]
})
export class SharedModule { }
