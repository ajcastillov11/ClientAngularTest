import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', redirectTo: 'login' 
  },
  { 
    path: 'login', component: LoginComponent 
  },
  {
    path: 'products', component: ProductsComponent
    , canActivate: [AuthGuard]
  },
  { 
    path: 'categories', component: CategoriesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
