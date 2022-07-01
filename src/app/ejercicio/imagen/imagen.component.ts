import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styles: [`
  
  `
  ]
})
export class ImagenComponent implements OnInit {
  constructor( private uploadService: UploadService) { }

  ngOnInit(): void {
  }
  imagenN:any[]=[];
  cargarImagen:boolean=false;
  cargar(event:any){
    let imagen = event.target.files[0];
    let lector= new FileReader();
    lector.readAsDataURL(imagen);
    lector.onloadend=()=>{
      console.log('Imagen Cargada');
      this.cargarImagen=true;
      this.imagenN.push(lector.result);
      this.uploadService.subirImg("Imagen"+Date.now(),lector.result).then(Url=>{
        console.log(Url);
        this.imagenN.pop();
        this.cargarImagen=false;
      })
    }
  }



  
}
