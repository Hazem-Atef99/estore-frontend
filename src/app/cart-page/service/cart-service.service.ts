import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }
  getCartProduct():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/cartProduct')
  }
}
