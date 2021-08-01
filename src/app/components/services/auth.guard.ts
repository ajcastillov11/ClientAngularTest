import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private service: SecurityService,
    private router : Router
  ) {
    

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.service.securityObjet.isAuthenticated) {
        return true;
      } else {
        alert('Token no válido o ya expiró, por favor iniciar sesión');
        this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
        return true;
      }

  }
  
}
