import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { DataBaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {

  usuarios: any;
  usuario = {
    email: '',
    password: '',
    name: ''
  }

  ngOnInit() {
  }

  constructor(private authService: AuthService, private database: DataBaseService, private router: Router) { }

  registrarse() {
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(user => {
      console.log("se registro: ", user);
      let lista = [...this.usuarios];
      let existe = lista.find(user => user.email == email);

      if (!existe) {
        console.log("USUARIO NUEVO CREADO")
        this.database.crear('users', this.usuario);
      };

      this.router.navigate(['/login']);
    }).catch(err => {
      console.log(err)
    })
  }



}