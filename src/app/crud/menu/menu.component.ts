import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [  ]
})
export class MenuComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
   ) { }

  ngOnInit(): void {
  }

  verAlumno(){
    this.router.navigate(['/crud/veralumno', 1]);
  }

  agregarAlumno(){
    this.router.navigate(['/crud/agregar']);
  }

  editarAlumno(){
    this.router.navigate(['/crud/edit', 1]);
  }



}
