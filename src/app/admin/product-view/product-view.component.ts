import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  products!:Product[];

  constructor(private productService:ProductService,private router:Router){

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>this.products=data)
  }

  viewEditForm(product:Product){
   // this.router.navigate(["/edit",product.id,product.name,product.brand,product.price])
    this.router.navigateByUrl(`/edit/${product.id}/${product.name}/${product.brand}/${product.price}`)
  }

  removeProduct(product:Product){
    
    this.productService.deleteProduct(product).subscribe(responseData=>{
     
      if('message' in responseData)
        alert(responseData.message)
    
    },error=>{
      console.error("Component Error Handling:",error.error.errorMessage)
      alert(error.error.errorMessage)
    })
    
  }

}
