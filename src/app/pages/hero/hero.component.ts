import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  public name = signal('Batman');
  public age = signal(30);

  public getHeroDescription():string{
    return `${ this.name() } - ${this.age()}`
  }

  public changeHero(){
    this.name.update( () => 'Spiderman');
    this.age.update( () => 22 );
  }

  public resetForm(){
    this.name.set('');
    this.age.set(0)
  }

  public changeAge(){
    this.age.update( ( AgeValue ) => AgeValue+= 1  )
  }

}
