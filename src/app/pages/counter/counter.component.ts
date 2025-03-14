import { RouterOutlet } from '@angular/router';
import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {

    public counter: number = 10;

    public Increase():number{
        return this.counter ++;
    }

    public IncreaseBy(value: number):number{
        return this.counter += value;
    }

    public SetCounterAt0(){
        this.counter = 0;
    }

}