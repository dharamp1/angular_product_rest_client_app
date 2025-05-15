import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css']
})
export class ProductAddFormComponent {

  product!:Product;

  addProduct(){
    
  }

}
