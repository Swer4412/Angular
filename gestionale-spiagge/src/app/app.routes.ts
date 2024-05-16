import { Routes } from '@angular/router';
import { TestInputComponent } from './test-input/test-input.component';
import { SceltaSpiaggiaComponent } from './scelta-spiaggia/scelta-spiaggia.component';
import { PrenotaSpiaggiaComponent } from './prenota-spiaggia/prenota-spiaggia.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/test-input'},
    {path: 'test-input', component: TestInputComponent},
    {path: 'scelta-spiaggia', component: SceltaSpiaggiaComponent},
    {path: 'prenota', component: PrenotaSpiaggiaComponent}

];
