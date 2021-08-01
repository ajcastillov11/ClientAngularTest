import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../Models/product';
import { ProductService } from '../services/product.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,AfterViewInit   {

  products: Product[] = [];
  
  displayedColumns: string[] = ['productId', 'productName', 'introductionDate', 'price'];
  dataSource: MatTableDataSource<Product[]> | any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private service : ProductService) {  
    this.dataSource = new MatTableDataSource(this.products);
   }

  ngOnInit():void {
    this.service.getProducts().subscribe(resp => 
      {
        this.products = resp;
    });
  }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

