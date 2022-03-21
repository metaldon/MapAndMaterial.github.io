import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialsComponent } from './components/materials/materials.component';

const routes: Routes = [
  {path: '', component: MaterialsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MaterialsRoutingModule { }
