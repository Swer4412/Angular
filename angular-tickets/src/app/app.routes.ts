import { Routes } from '@angular/router';
import { AllinoneComponent } from './allinone/allinone.component';

export const routes: Routes = [

    { path: '', redirectTo: '/allinone', pathMatch: 'full' },
    { path: 'allinone', component: AllinoneComponent } ,
];
