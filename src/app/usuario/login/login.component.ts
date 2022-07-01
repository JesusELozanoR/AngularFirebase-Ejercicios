import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  }

  ngOnInit() {
 
  }
  validaremial:boolean=true;

  constructor(private authService: AuthService, private router: Router) { }
  numero: Number= 0;
  Ingresar() {
    const { email, password } = this.usuario;

    this.numero=email.length;
    if(!((this.numero>5)&&(email.includes('@'))&&(email.includes('.com'))))
    { this.validaremial=false;
      return}

    this.authService.login(email, password).then(user => {
      if(!user) {
        console.log('UwU')
        return;
      }else{alert("Datos Correctos, Iniciando Sesion");
      console.log("Bienvenido ", user);
      this.router.navigate(['/usuario/listado'])}
      })
  }


  logout() {
    this.authService.logout();
  }
}
