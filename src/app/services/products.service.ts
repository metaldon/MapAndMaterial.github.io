import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})

export class ProductsService {
    constructor(private http:HttpClient) {

    }
    getAllProducts():Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host+"/products");
    }
    getSelectedProducts():Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host+"/products?selectionne=true");
    }
    getAvailableProducts():Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host+"/products?disponible=true");
    }
    searchProducts(keyword:string):Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host+"/products?nom_like="+keyword);
    }
    select(product:Product):Observable<Product>{
        let host = environment.host;
        product.selectionne=!product.selectionne;
        return this.http.put<Product>(host+"/products"+product.id,product);
    }
    deleteProduct(product:Product):Observable<void>{
        let host = environment.host;
        product.selectionne=!product.selectionne;
        return this.http.delete<void>(host+"/products"+product.id);
    }
}
export class AppRoutingModule { }