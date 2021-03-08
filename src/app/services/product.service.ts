import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({//bunu gördüğünde service olğunu anlayabilirsin
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44350/api/products/getall"
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
}//javascriptte her şey fonksiyon class yok
}
