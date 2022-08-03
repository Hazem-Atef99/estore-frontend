import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-best-product-area',
  templateUrl: './best-product-area.component.html',
  styleUrls: ['./best-product-area.component.css']
})
export class BestProductAreaComponent implements OnInit {
  bestproductBigPicture : Product[]=[];
  bestproductSmallPicture : Product[]=[];

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.getbestproductSmallPicture();
    this.getbestproductBigPicture();
  }
getbestproductBigPicture(){
  this.sharedService.getBestProduct().subscribe(data=>{
    for (let i = 0; i < data.length; i++) {
      if (data[i].productName=="Manz") {
        this.bestproductSmallPicture.push(data[i])
      }
      
    }
    
 
  })
}
getbestproductSmallPicture(){
  this.sharedService.getBestProduct().subscribe(data=>{
    for (let i = 0; i < data.length; i++) {
      if (data[i].productName=="shirts") {
        this.bestproductBigPicture.push(data[i])
      }
      
    }
    
 
  })
}
}
