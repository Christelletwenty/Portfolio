import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'formular',
        loadComponent: () => import('./formular/formular.component').then((c) => c.FormularComponent),
    },

    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
    },

    {
        path: 'skills',
        loadComponent: () => import('./skills/skills.component').then((c) => c.SkillsComponent),
    },

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },

];
