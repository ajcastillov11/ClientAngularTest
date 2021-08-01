import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';

const API_URL = 'https://localhost:44382/api/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(API_URL);
  }
  
}
