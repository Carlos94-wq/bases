import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { IPersonaje } from '../../../interfaces/IPersonaje';

@Component({
  selector: 'app-dragonball-form',
  imports: [],
  templateUrl: './dragonballForm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballFormComponent { 

  public newPersonaje = output<IPersonaje>();
  public nombre = signal('');
  public poder = signal(0);


  public addPersonaje(){

    if (!this.nombre() || !this.poder() || this.poder() < 0 ) {
      return;
    }

    const newPersonaje: IPersonaje = {
      id: Math.floor(Math.random() * 1000),
      Nombre: this.nombre(),
      Poder: this.poder()
    }

    this.newPersonaje.emit(newPersonaje);
  }

}
