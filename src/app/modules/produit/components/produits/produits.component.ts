import { ProduitaddComponent } from './../produitadd/produitadd.component';
import { ProduitmodComponent } from './../produitmod/produitmod.component';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ProductsService } from './../../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  products$:Observable<AppDataState<Product[]>> | null=null;
  readonly DataStateEnum = DataStateEnum;

  constructor(
    private ProductsService: ProductsService,
    private modalService: BsModalService
    ) {}


 

  ngOnInit(): void {
  }
 
  onGetAllProducts() {
    this.products$= this.ProductsService.getAllProducts().pipe(
      map(data=>{ 
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetSelectedProducts() {
    this.products$= this.ProductsService.getSelectedProducts().pipe(
      map(data=>{ 
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  onGetAvailableProducts() {
    this.products$= this.ProductsService.getAvailableProducts().pipe(
      map(data=>{ 
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  onSearch(dataForm:any) {
    this.products$= this.ProductsService.searchProducts(dataForm.keyword).pipe(
      map(data=>{ 
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }
  onSelect(p: Product) {
    this.ProductsService.select(p).subscribe(data=>{
      p.selectionne =data.selectionne;
    })
  }
  onDelete(p: Product) {
    let v=confirm("Etes vous sure?");
    if (v==true)
    this.ProductsService.deleteProduct(p).subscribe(data=>{
      this.onGetAllProducts();
    })
  }
  onNewProduct()  {
    const modalRef: BsModalRef = this.modalService.show(ProduitaddComponent, {class: 'modal-danger modal-lg '});
  }
  onEdit(p: Product) {
    const initialState = { product: p}
    const modalRef: BsModalRef = this.modalService.show(ProduitmodComponent, { initialState, class: 'modal-danger modal-lg '});
  }
} 

