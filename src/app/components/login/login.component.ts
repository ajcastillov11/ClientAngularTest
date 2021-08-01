import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelUser } from '../Models/model-user';
import { ModelUserAuth } from '../Models/model-user-auth';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  hide = true;
  errorMessaje = '';
  retunrURL = '/products';

  logNOk : boolean = false;

  user: ModelUser | any;
  securityObjet: ModelUserAuth | any;

  constructor(private authService: SecurityService, private router: Router, private fb: FormBuilder
  ) {
    this.rForm = fb.group({
      'userName': ["", Validators.compose([Validators.required])],
      'Password': ["", Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  logIn(user: ModelUser) {
    this.errorMessaje = ''
    this.authService.Login(user).subscribe(
      (res: any) => {
        this.securityObjet = res;
        this.router.navigateByUrl(this.retunrURL);
      },
      error => {
        this.errorMessaje = error;
        this.logNOk = true;  
      }
    )
    
  }

  logOut(): void {
    if (this.authService.logout()) {
      this.router.navigate(['Login']);
    }
  }

}
