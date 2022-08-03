import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-best-collection-area',
  templateUrl: './best-collection-area.component.html',
  styleUrls: ['./best-collection-area.component.css']
})
export class BestCollectionAreaComponent implements OnInit {
   products: Product[];
   imageName :string;
  constructor(public sharedSevice: SharedService) { }

  ngOnInit(): void {
    this.getCollectionProducts();
  }
getCollectionProducts(){
  this.sharedSevice.getProducts().subscribe(data=>
   {
    console.log(data)
  // for(let i=0;i<data.length;i++){
  //   if (data[i].isBestCollection==true) {
  //     this.products[i]=data[i]
  //   }
  // }
    
  } );
}
}
