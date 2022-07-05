import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Alumno } from '../menu/menu.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { stringify } from '@firebase/util';
import { doc, getDoc,collection, setDoc } from "firebase/firestore";
import { DocumentReference, FirebaseFirestore } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  _alumnoN: Alumno={
    nombre: '',
    boleta: '',
    cal : 0
  }

  setAlumno(alumnon: Alumno){
    this._alumnoN=alumnon;
  }
  getAlumno():Alumno{
    return this._alumnoN
  }



  alumnos!: Observable<Alumno[]>;

  private alumnosDB: AngularFirestoreCollection<Alumno>;
  constructor( private readonly angularFirestore :AngularFirestore ) { 
    this.alumnosDB = angularFirestore.collection<Alumno>('Alumnos');
    this.visualizarGrupo();
  }


  eliminarAlumno(alumnoN: Alumno){
    return new Promise( async (resolve, reject)=> {
      try {
        const result = await this.alumnosDB.doc(alumnoN.boleta).delete();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    })
  }


  guardarAlumno(alumnoN: Alumno){
    return new Promise( async (resolve, reject)=> {
      try {
        const result = await this.alumnosDB.doc(alumnoN.boleta).set(alumnoN);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    })
  }

  editarAlumno(alumnoN: Alumno): Promise<void>{
    return new Promise( async (resolve, reject)=> {
      try {
        const result = await this.alumnosDB.doc(alumnoN.boleta).set(alumnoN);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    })
  }


  visualizarGrupo(): void{
    this.alumnos = this.alumnosDB.snapshotChanges()
                        .pipe(
                            map(res=> res.map(a=>a.payload.doc.data() as Alumno))
                        )

  }

}
