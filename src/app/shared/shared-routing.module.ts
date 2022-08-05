import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriParentComponent } from '../categoriPage/Components/categori-parent/categori-parent.component';
import { HomeParentComponent } from '../home/Components/home-parent/home-parent.component';

const routes: Routes = [
  {path:" ",component:HomeParentComponent},
  {path:"home",component:HomeParentComponent},
  {path:"Catagori",component:CategoriParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
