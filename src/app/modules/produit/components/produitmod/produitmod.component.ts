import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/model/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-produitmod',
  templateUrl: './produitmod.component.html',
  styleUrls: ['./produitmod.component.css']
})
export class ProduitmodComponent implements OnInit {

 product:any;
 // public form?: FormGroup ;
  public form: FormGroup = this.fb.group({});
  public submitted:boolean = false;
  constructor(
    public modalService: BsModalService,
    public fb: FormBuilder,
    public productsService: ProductsService
    ) { 
    

  }

  ngOnInit(): void {
    console.log(this.product)
       this.form = this.fb.group({ 
            id: [ Validators.required],
            nom: [Validators.required],
            prix: [ Validators.required],
            quantite:[ Validators.required],
            selectionne: [ ],
            disponible: [ ]
      }) 
      this.form.patchValue(this.product);
 
  }
  public closeModal() {
    this.modalService.hide();
  }
  updateProduct(){
    console.log(this.form.value)
    const produit: Product = this.form.value;
    this.productsService.updateProduct(produit).toPromise().then(data => {
    
       alert("Modification effectuee avec sucess");
       this.closeModal();
    }).catch(() => {
     
      this.closeModal();
    }).finally(() => {
      this.closeModal();
    })
  }
}
