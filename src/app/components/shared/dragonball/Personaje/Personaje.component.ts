import { Component, input, signal } from '@angular/core';
import { IPersonaje } from '../../../../interfaces/IPersonaje';


@Component({
  selector: 'app-personaje',
  imports: [],
  templateUrl: './Personaje.component.html'
})
export class PersonajeComponent { 

  public personajes = input.required<IPersonaje[]>();
  public Title = input.required<string>();

}
