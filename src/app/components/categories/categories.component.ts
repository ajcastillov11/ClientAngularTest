import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  displayedColumns: string[] = ['categoryId', 'categoryName'];
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(
      next => this.categories = next
    )
  }

}
