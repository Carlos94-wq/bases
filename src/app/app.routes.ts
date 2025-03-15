import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballpageComponent } from './pages/dragonballpage/dragonballpage.component';
import { DragonballpageSuperComponent } from './pages/dragonballpage-super/dragonballpage-super.component';
import { TheLastOfUsPageComponent } from './pages/thelastofus/TheLastOfUsPage/TheLastOfUsPage.component';

export const routes: Routes = [
    { path: '', component: CounterComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'dragonball', component: DragonballpageComponent },
    { path: 'dragonballSuper', component: DragonballpageSuperComponent },
    { path: 'tlou', component: TheLastOfUsPageComponent },
    { path: '**', redirectTo: '' }
];
