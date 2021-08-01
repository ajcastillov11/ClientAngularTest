import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelUser } from '../Models/model-user';
import { ModelUserAuth } from '../Models/model-user-auth';
import { catchError, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private API_URL = environment._urlService;
  
  securityObjet: ModelUserAuth = new ModelUserAuth();

  constructor(private http: HttpClient) { 
  }

  resetSecurityObjet(){
    this.securityObjet.userName = '';
    this.securityObjet.bearerToken = '';
    this.securityObjet.isAuthenticated = false;
  }

  Login(entity: ModelUser){
    this.resetSecurityObjet();
    return this.http.post(`${this.API_URL}Login`,entity,httpOptions)
    .pipe(
      tap((resp: ModelUserAuth | any) => {
        Object.assign(this.securityObjet,resp);
        localStorage.setItem('bearerToken',this.securityObjet.bearerToken);
      }),
      catchError(this.handleError)
    )
  }

  logout(): boolean{
    this.resetSecurityObjet();
    localStorage.removeItem('bearerToken');
    return true;
  }

  handleError(err:any){
    return throwError(err.error);
  }

}
