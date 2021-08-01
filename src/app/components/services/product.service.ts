import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { environment } from 'src/environments/environment';


const API_URL = environment._urlService;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http: HttpClient) { }
  
  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}Product`);
  }


}
