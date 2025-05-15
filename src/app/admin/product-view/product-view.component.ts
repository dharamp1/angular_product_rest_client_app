import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  products!:Product[];

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>this.products=data)
  }

}
