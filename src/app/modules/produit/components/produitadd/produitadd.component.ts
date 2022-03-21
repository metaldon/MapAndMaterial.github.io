import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-produitadd',
  templateUrl: './produitadd.component.html',
  styleUrls: ['./produitadd.component.css']
})
export class ProduitaddComponent implements OnInit {

  public form: FormGroup = this.fb.group({})
  constructor( 
    public modalService: BsModalService,
    public fb: FormBuilder,
    public productsService: ProductsService
    
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      nom: ['', Validators.required],
      prix: [0, Validators.required],
      quantite: [0, Validators.required],
      selectionne: [false],
      disponible: [false]
    })
  }

  public closeModal() {
    this.modalService.hide();
  }
  
  createProduct() {
    const produit: Product = this.form.value;
    this.productsService.createProduct(produit).toPromise().then(data => {
      console.log(data)
    });
  
  }

  

 
}
