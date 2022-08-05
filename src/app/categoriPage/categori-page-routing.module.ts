import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriParentComponent } from './Components/categori-parent/categori-parent.component';

const routes: Routes = [
  {path: '',component: CategoriParentComponent},
  {path: 'Catagori',component: CategoriParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriPageRoutingModule { }
