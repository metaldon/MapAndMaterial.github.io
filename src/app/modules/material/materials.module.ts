import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './components/materials/materials.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [

    MaterialsComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialsModule { }
