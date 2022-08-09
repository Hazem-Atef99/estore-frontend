import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // formData:Product[]=[];
  constructor(private http : HttpClient) { 
  }
  public getProducts():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/all');
  }
 
  public getProductById(Id:number):Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/'+Id);
  }
  public AddToCart(product:Product){
    // console.log(product)
    return this.http.put (`http://localhost:48147/api/product/${product.productID}`,product)
  }
}
