import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) },
  { path: 'home', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) },
  { path: 'Catagori', loadChildren:()=>import('./categoriPage/categori-page.module').then(m=>m.CategoriPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
