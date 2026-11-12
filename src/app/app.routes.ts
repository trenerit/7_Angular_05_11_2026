import { Routes } from '@angular/router';
import { AppStart } from './app-start/app-start';
import { Formularze } from './formularze/formularze';
import { If } from './if/if';
import { For } from './for/for';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'start'},
    {path: 'start', component: AppStart},
    {path: 'formularze', component: Formularze},
    {path: 'if', component: If},
    {path: 'for', component: For},
];
