import { Routes } from '@angular/router';
import { MediciComponent } from './medici/medici.component';
import { PrenotaComponent } from './prenota/prenota.component';
import { LoginComponent } from './login/login.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'medici', component: MediciComponent},
    {path: 'prenota', component: PrenotaComponent},
    {path: 'prenotazioni', component: PrenotazioniComponent}
];
