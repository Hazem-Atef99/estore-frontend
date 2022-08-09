import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';
import { CartServiceService } from '../../service/cart-service.service';

@Component({
  selector: 'app-cart-area',
  templateUrl: './cart-area.component.html',
  styleUrls: ['./cart-area.component.css']
})
export class CartAreaComponent implements OnInit {
cartProducts:Product[]=[];
subTotal:number;
  constructor(private cartService:CartServiceService,
              private sharedService:SharedService,
              private router:Router) { }

  ngOnInit(): void {
    this.getCartProducts();
  }
getCartProducts(){
  this.cartService.getCartProduct().subscribe(data=>{
    this.cartProducts =data;
 for (let i = 0; i < this.cartProducts.length; i++) {
  this.cartProducts[i].totalPrice=this.cartProducts[i].price*this.cartProducts[i].quantity;
  //  let tempTotal= this.cartProducts[i].totalPrice;
  //  this.subTotal+=tempTotal;

}
this.subTotal = this.cartProducts.reduce(function(prev, cur) {
  return prev + cur.totalPrice;
}, 0);
  })

  console.log(this.subTotal)
}
removeItemFromCart(e){
  e.isAddedToCart=false;
this.sharedService.AddToCart(e).subscribe(res=>{
  console.log(res)
});
this.ngOnInit();
}
updatcart(){
  this.ngOnInit();
  console.log("updated")
}
onClick(){
this.router.navigate(['/ProductList'], { replaceUrl: true });
}
ProductDetails(e){
  this.router.navigateByUrl(`/ProductList/ProductDetails/${e}`);
}
// Counter(type:string){
//   type==='add'?this.cartProducts[].quantity++:this.quantity--;
// }
}
