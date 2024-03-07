import { Routes } from '@angular/router';
import { ListUtenteComponent } from './list-utente/list-utente.component';
import { DetailUtenteComponent } from './detail-utente/detail-utente.component';
import { EditUtenteComponent } from './edit-utente/edit-utente.component';

export const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full'}, // redirect to `first-component`
    { path: 'list', component: ListUtenteComponent },
    { path: 'detail/:id', component: DetailUtenteComponent },
    { path: 'edit/:id', component: EditUtenteComponent}
  ];
