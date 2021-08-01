import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelUserAuth } from '../Models/model-user-auth';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  retunrURL = '/login';
  securityObject : ModelUserAuth | any;

  constructor(private authService : SecurityService,private router : Router) {
    this.securityObject = this.authService.securityObjet;
  }
  Islog = false;
  ngOnInit(): void {
    this.Islog = true;
  }

  logOut(){
    this.authService.logout();
    this.router.navigateByUrl(this.retunrURL);
  }

  title = 'ClientAngularTest';
}
