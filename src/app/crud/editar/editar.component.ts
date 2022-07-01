import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit {
  


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {    
               }

   
  ngOnInit(): void {
  }


  regresar(){
    this.router.navigate(['/crud/menu']);
  }

}
