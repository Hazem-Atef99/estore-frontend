import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList :Product[]=[];
  searchtext='';
  category:string[]=[];
  tempCategory:string[]=[];
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
getProducts(){
  this.sharedService.getProducts().subscribe(data=>{
    for (let i = 0; i < data.length; i++) {
      if (data[i].isSlider!=true&&data[i].isgallery!=true) {
        this.productList.push(data[i])
      }
      
    }
  })
}
getCategories(){
  this.sharedService.getProducts().subscribe(data=>{
    for (let i = 0; i < data.length; i++) {
     if (data[i].category!=null) {
      this.tempCategory.push(data[i].category)
     }      
    }
    this.category=[...new Set(this.tempCategory)]
  })
}
onChange(event){
if (event.target.value=='category') {
  this.searchtext='';
}
else{
  this.searchtext=event.target.value;
}
}
}
