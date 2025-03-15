import { Component, computed, inject, signal } from '@angular/core';
import { PersonajeComponent } from "../../components/shared/dragonball/Personaje/Personaje.component";
import { DragonballFormComponent } from "../../components/shared/dragonballForm/dragonballForm.component";
import { IPersonaje } from '../../interfaces/IPersonaje';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonballpageSuper',
  imports: [
    PersonajeComponent, 
    DragonballFormComponent,
  ],
  templateUrl: './dragonballpage-super.component.html'
})
export class DragonballpageSuperComponent {

  public dragonballService = inject( DragonballService )

  public getPersonaFromFom( personaje:IPersonaje ){
    this.dragonballService.getPersonaFromFom( personaje )
  }

}
