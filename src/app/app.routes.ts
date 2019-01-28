import { RouterModule, Routes } from '@angular/router';
import {UnoComponent } from './components/uno/uno.component';
import {DosComponent } from './components/dos/dos.component';

const APP_ROUTES: Routes = [

    {path: 'uno', component: UnoComponent},
    {path: 'dos', component: DosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);