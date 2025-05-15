import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_REST_API_BASE_URL = "http://localhost:8080/api/products"

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.PRODUCT_REST_API_BASE_URL)
  }
}
