import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {MatFormField} from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private autenticacion: AutenticacionService, private router: Router){}
    
  redireccion = '';

  login(){
    this.autenticacion.login();
    this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = '';
    this.router.navigate(['/operacion']);
  }
  
    // Angular Material
    hide = true;
}
