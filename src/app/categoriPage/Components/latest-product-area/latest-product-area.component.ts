import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-latest-product-area',
  templateUrl: './latest-product-area.component.html',
  styleUrls: ['./latest-product-area.component.css']
})
export class LatestProductAreaComponent implements OnInit {
latestProduct : Product[]=[];
  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
    this.getLatestProduct();
  }
getLatestProduct(){
  this.sharedService.getProducts().subscribe(data=>{
    for (let i = 0; i < data.length; i++) {
      if (data[i].isLatestProduct==true) {
        this.latestProduct.push(data[i])
      }
      
    }
    
 
  })
}
}
