import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./web/home/home.component'),
        children: [
            {
                path: 'about',
                loadComponent: () => import('./web/about/about.component')
            }
        ]
    }

];
