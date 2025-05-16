import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css']
})
export class ProductEditFormComponent implements OnInit{
  product:Product = new Product();
  editForm = new FormGroup({
    name:new FormControl(this.product.name),
    brand:new FormControl(this.product.brand),
    price: new FormControl(this.product.price,[Validators.required,Validators.min(this.product.price)])
  })

  constructor(private route:ActivatedRoute,private productService:ProductService){

  }
  ngOnInit(): void {
    this.product.id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.route.paramMap.subscribe(params=>this.product.name = params.get("nm")!)
    this.product.brand = this.route.snapshot.paramMap.get('br')!
    this.route.paramMap.subscribe(params=>this.product.price = parseFloat(params.get("pr")!))
    console.log(this.product)
    this.editForm = new FormGroup({
    name:new FormControl(this.product.name),
    brand:new FormControl(this.product.brand),
    price: new FormControl(this.product.price,[Validators.required,Validators.min(this.product.price)])
  })
  }

  get price(){
    return this.editForm.get('price')
  }

  save(){
    this.productService.editProduct(this.product).subscribe(responseData=>{
      if('message' in responseData)
        alert(responseData.message)
    })
  }

}
