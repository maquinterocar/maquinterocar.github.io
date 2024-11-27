import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./web/home/home.component'),
        children: [
        ]
    }

];
