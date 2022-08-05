import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-slider-area',
  templateUrl: './slider-area.component.html',
  styleUrls: ['./slider-area.component.css']
})
export class SliderAreaComponent implements OnInit {
sliderProduct : Product[]=[];
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.getsliderProduct();
  }
  getsliderProduct(){
    this.sharedService.getProducts().subscribe(data=>
     {
  for (let i = 0; i < data.length; i++) {
    if(data[i].isSlider==true){
      this.sliderProduct.push(data[i])
    }
  }
    } );
  }
}
