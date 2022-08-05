import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-latest-offers',
  templateUrl: './latest-offers.component.html',
  styleUrls: ['./latest-offers.component.css']
})
export class LatestOffersComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
latestOffersProducts : Product[]=[];
  ngOnInit(): void {
    this.getlatestOffersProduct();
  }
getlatestOffersProduct(){
  this.sharedService.getProducts().subscribe(data=>{
    for (let i = 0; i < data.length; i++) {
      if (data[i].isLatestOffer==true) {
        this.latestOffersProducts.push(data[i])
      }
      
    }
    
 
  })
}
}

