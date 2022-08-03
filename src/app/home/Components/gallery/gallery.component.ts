import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
galleryProducts:Product[]=[];
  constructor( private sharedService:SharedService ) { }

  ngOnInit(): void {
    this.getGalleryProduct();
  }
getGalleryProduct(){
  this.sharedService.getProducts().subscribe(data=>{
    for (let i = 0; i < data.length; i++) {
        if (data[i].isgallery==true) {
          this.galleryProducts.push(data[i]);
        }      
    }
  })
}
}
