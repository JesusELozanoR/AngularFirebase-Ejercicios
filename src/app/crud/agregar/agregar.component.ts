import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccionesService } from '../services/acciones.service';
import { Alumno } from '../menu/menu.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  alumnos$ = this.accionesService.alumnos;

  constructor(private router: Router,
              private accionesService: AccionesService) { }

  alumno: Alumno={
    nombre: '',
    boleta: '',
    cal : 0
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log('Guardando Alumno')
    this.accionesService.guardarAlumno(this.alumno);
  }


  regresar(){
    this.router.navigate(['/crud/menu']);
  }


}
