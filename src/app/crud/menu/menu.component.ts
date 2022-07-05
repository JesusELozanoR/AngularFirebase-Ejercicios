import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AccionesService } from '../services/acciones.service';
import { Observable } from 'rxjs';

export interface Alumno{
  nombre: string;
  boleta: string;
  cal : number;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    td {
      text-align: center;
    }
    p {
      text-align: center;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    `
  ]
})
export class MenuComponent {

  alumnos$ = this.accionesService.alumnos;
  constructor( private router: Router,
               private accionesService: AccionesService) { }

  ngOnInit(): void {
  }

  verAlumno(alumno: Alumno){
    this.router.navigate(['/crud/veralumno', alumno.boleta]);
  }

  agregarAlumno(){
    this.router.navigate(['/crud/agregar']);
  }

  editarAlumno(alumno: Alumno){
    this.accionesService.setAlumno(alumno);
    this.router.navigate(['/crud/edit', alumno.boleta]);
  }

  eliminarAlumno(alumno: Alumno){
    console.log('Eliminando alumno: ', alumno.nombre)
    this.accionesService.eliminarAlumno(alumno);
  }


}
