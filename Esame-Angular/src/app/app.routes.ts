import { Routes } from '@angular/router';
import { TabellaComponent } from './tabella/tabella.component';
import { PrenotaComponent } from './prenota/prenota.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/tabella'},
    {path: 'tabella', component: TabellaComponent},
    {path: 'prenota', component: PrenotaComponent}
];
