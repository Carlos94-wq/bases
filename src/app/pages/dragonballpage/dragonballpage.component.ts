import { Component, computed, signal } from '@angular/core';
import { IPersonaje } from '../../interfaces/IPersonaje';

@Component({
  selector: 'app-dragonballpage',
  imports: [],
  templateUrl: './dragonballpage.component.html'
})
export class DragonballpageComponent {

  public personajes = signal<IPersonaje[]>([
    { id:1, Nombre: 'Goku', Poder: 9001 },
    { id:2, Nombre: 'Vegueta', Poder: 9002 },
    { id:3, Nombre: 'Picoro', Poder: 8000 },
    { id:4, Nombre: 'Yamcha', Poder: 500 },
  ]);

  public nombre = signal('');
  public poder = signal(0);

  public powerClass = computed( () =>{
    return{
      'text-danger': true
    }
  });

  public addPersonaje(){

    if (!this.nombre() || !this.poder() || this.poder() < 0 ) {
      return;
    }

    const newPersonaje: IPersonaje = {
      id: this.personajes().length + 1,
      Nombre: this.nombre(),
      Poder: this.poder()
    }

    // this.personajes().push( newPersonaje );
    this.personajes.update( (list) => [...list, newPersonaje]  )
    console.log(this.personajes);
  }


}
