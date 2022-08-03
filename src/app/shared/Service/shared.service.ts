import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http : HttpClient) { 
  }
  public getProducts():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/all');
  }
  public getLatestOffersProduct():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/LatestOfferProducts');
  }
  public getSliderProduct():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/slider');
  }
  public getBestProduct():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/bestProducts');
  }
  public getCategoryProduct():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/category');
  }
  public getGalleryProduct():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/gallery');
  }
  public getLatestProduct():Observable<Product[]>{
    return this.http.get <Product[]>('http://localhost:48147/api/product/latestProducts');
  }
}
