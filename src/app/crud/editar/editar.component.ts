import { Component, OnInit } from '@angular/core';
import { Alumno } from '../menu/menu.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AccionesService } from '../services/acciones.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {
  


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService) {    
               }

  alumno: Alumno={
    nombre: '',
    boleta: '',
    cal : 0
  }

  alumnoN: Alumno={
    nombre: '',
    boleta: '',
    cal : 0
  }

              
  ngOnInit(): void {
    this.alumnoN=this.accionesService.getAlumno();
  }
  

  editar(){
    this.alumno.boleta=this.alumnoN.boleta;
    this.accionesService.editarAlumno(this.alumno);
    this.router.navigate(['/crud/menu']);
  }

  regresar(){
    this.router.navigate(['/crud/menu']);
  }

}
