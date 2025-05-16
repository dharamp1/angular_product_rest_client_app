import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { throwError,pipe,catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_REST_API_BASE_URL = "http://localhost:8080/api/products"

  headers:HttpHeaders = new HttpHeaders({
    'Accept':'application/json'
  });

  options = {headers:this.headers}

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.PRODUCT_REST_API_BASE_URL)
  }

  addProduct(product:Product){
    return this.http.post(this.PRODUCT_REST_API_BASE_URL+"/add",product,this.options);
  }

  editProduct(product:Product){
    return this.http.put(this.PRODUCT_REST_API_BASE_URL+"/update",product)
  }

  deleteProduct(product:Product){
    return this.http.delete(this.PRODUCT_REST_API_BASE_URL+"/delete",{body:product})
                    .pipe(catchError(this.handleError))
  }

  // error handling
  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error(`An error occured: ${error.error}`)
    }else{
      console.error(`Backend returned error ${error.status} and body was`, error.error.errorMessage)
      
    }
    //return throwError(()=>new Error(`Something bad happened, Please try again later`))
    return throwError(()=>error)
  }

}
