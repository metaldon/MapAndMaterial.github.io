import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitsComponent } from './components/produits/produits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitsAddComponent } from './components/produitAdd/produits-add/produits-add.component';


@NgModule({
  declarations: [
    ProduitsComponent,
    ProduitsAddComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class ProduitModule { }
