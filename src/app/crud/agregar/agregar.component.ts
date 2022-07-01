import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {


  constructor( private router: Router,
    private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
  }


  regresar(){
    this.router.navigate(['/crud/menu']);
  }


}
