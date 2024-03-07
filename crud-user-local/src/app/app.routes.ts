import { Routes } from '@angular/router';
import { ListUtenteComponent } from './list-utente/list-utente.component';
import { DetailUtenteComponent } from './detail-utente/detail-utente.component';

export const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full'}, // redirect to `first-component`
    { path: 'list', component: ListUtenteComponent },
    { path: 'detail/:id', component: DetailUtenteComponent }
  ];
