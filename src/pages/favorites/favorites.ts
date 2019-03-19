import { Component } from '@angular/core';
import * as firebase from 'Firebase';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  nombre: string = "";
  direccion: string = "";

  lugaresRef: AngularFireList<any>;
  lugares: Observable<any[]>;
  constructor(public database: AngularFireDatabase) {
    this.lugaresRef = this.database.list('lugares');
    this.lugares = this.lugaresRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    });
  }

  async onNew() {
    const { nombre, direccion } = this;
    try {
      /**
       * Aqui va la logica de insercion a la bdd de base de fuego
       * 
       * @param nombre
       * @param direccion
       */
      let nuevoLugar = firebase.database().ref('lugares/').push();
      nuevoLugar.set({ nombre: nombre, direccion: direccion });
    } catch(e) {
      console.dir(e);
    }
  }

}