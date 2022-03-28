import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModule} from 'ngx-bootstrap/alert';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitsComponent } from './components/produits/produits.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitaddComponent } from './components/produitadd/produitadd.component';
import { ProduitmodComponent } from './components/produitmod/produitmod.component';



@NgModule({
  declarations: [
    ProduitsComponent,
    ProduitaddComponent,
    ProduitmodComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule
  
  ],
  providers: [BsModalService]
 
})
export class ProduitModule { }
