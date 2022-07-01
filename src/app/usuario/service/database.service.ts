import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {


  constructor(private firestore: AngularFirestore) { }


 
  public crear(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  public obtenerPorId(coleccion: string, id: string) {
    return this.firestore.collection(coleccion).doc(id).snapshotChanges();
  }

}
