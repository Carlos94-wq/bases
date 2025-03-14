import { Component, computed, signal } from '@angular/core';

interface Personaje{
  id: number,
  Nombre: string,
  Poder: number
}

@Component({
  selector: 'app-dragonballpage',
  imports: [],
  templateUrl: './dragonballpage.component.html'
})
export class DragonballpageComponent {

  public personajes = signal<Personaje[]>([
    { id:1, Nombre: 'Goku', Poder: 9001 },
    { id:2, Nombre: 'Vegueta', Poder: 9002 },
    { id:3, Nombre: 'Picoreo', Poder: 8000 },
    { id:4, Nombre: 'Yamcha', Poder: 500 },
  ]);

  public powerClass = computed( () =>{
    return{
      'text-danger': true
    }
  })


}
