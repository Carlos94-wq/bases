import { Component, inject } from '@angular/core';
import { ThelastofusListComponent } from "../../../components/shared/thelastofudList/thelastofusList/thelastofusList.component";
import { TheLastOfUsServiceService } from '../../../services/TheLastOfUsService.service';
import { ITlouPersonaje } from '../../../interfaces/ITlouPersonaje';

@Component({
  selector: 'app-the-last-of-us-page',
  imports: [ ThelastofusListComponent ],
  templateUrl: './TheLastOfUsPage.component.html',
})
export class TheLastOfUsPageComponent { 

  public TlouService = inject( TheLastOfUsServiceService );

  public GetPersonaje( personaje: ITlouPersonaje ){
    console.log(personaje);
  }

}
