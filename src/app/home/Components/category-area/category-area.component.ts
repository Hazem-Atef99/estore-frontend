import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { SharedService } from 'src/app/shared/Service/shared.service';

@Component({
  selector: 'app-category-area',
  templateUrl: './category-area.component.html',
  styleUrls: ['./category-area.component.css']
})
export class CategoryAreaComponent implements OnInit {
categoryProduct :Product[];
  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
this.getCategoryProduct();
  }
  getCategoryProduct(){
    this.sharedService.getCategoryProduct().subscribe(data =>
      {
        this.categoryProduct=data;
      })
  }

}
