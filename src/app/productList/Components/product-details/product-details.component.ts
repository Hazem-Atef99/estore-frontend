import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/Service/shared.service';
import { Product } from 'src/app/shared/product/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
ProductId:number;
product:any;
  constructor(private activatedRoute:ActivatedRoute,
              private sharedService:SharedService,
              private router:Router,
              ) { }

  ngOnInit(): void {
    this.ProductId=this.activatedRoute.snapshot.params['productID'];
   this.getProductById();
  }
  getProductById(){
    this.sharedService.getProductById(this.ProductId).subscribe(data=>{
    this.product=data;
    })
  }
  Counter(type:string,e){
    type==='add'?e.quantity++:e.quantity--;
    this.sharedService.AddToCart(e).subscribe(res=>{
      console.log(res)
    })
  }
  onClick(e){
e.isAddedToCart=true; 
console.log(e)
    this.sharedService.AddToCart(e)
    .subscribe(res=>{
    console.log(res)
    })
 this.router.navigate(['/AddToCart'], { replaceUrl: true });
  }
}
