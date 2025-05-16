import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css']
})
export class ProductAddFormComponent {

  product:Product=new Product();

  constructor(private productService:ProductService){

  }

  addProduct(){
    console.log("Form submitted")
    console.log(this.product)
    this.productService.addProduct(this.product).subscribe(data=>{if('message' in data) alert(data.message)})
  }

}
