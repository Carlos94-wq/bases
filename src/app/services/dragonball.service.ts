import { Injectable, signal } from '@angular/core';
import { IPersonaje } from '../interfaces/IPersonaje';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor() { }

  public personajes = signal<IPersonaje[]>([
    { id:1, Nombre: 'Goku', Poder: 9001 },
    { id:2, Nombre: 'Vegueta', Poder: 9002 },
  ]);

  public getPersonaFromFom( personaje:IPersonaje ){
    console.log( personaje );
    this.personajes.update( list => [...list, personaje] )
  }

}
