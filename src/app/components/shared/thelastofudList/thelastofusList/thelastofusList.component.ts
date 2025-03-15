import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ITlouPersonaje } from '../../../../interfaces/ITlouPersonaje';

@Component({
  selector: 'app-thelastofus-list',
  imports: [],
  templateUrl: './thelastofusList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThelastofusListComponent { 

  public ListaPersonajes = input.required<ITlouPersonaje[]>();
  public PersonaleSeleccionado = output<ITlouPersonaje>();

  public sendPersonaje( id: number ){
    const personaje = this.ListaPersonajes().filter( (item) => item.Id == id );
    this.PersonaleSeleccionado.emit( personaje[0] );
  }

}
