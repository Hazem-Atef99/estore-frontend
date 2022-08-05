import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeParentComponent } from './Components/home-parent/home-parent.component';

const routes: Routes = [
  {path: '',component: HomeParentComponent},
  {path: 'home',component: HomeParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
