import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component'; 

export const routes: Routes = [
    { path: '', component: MainContentComponent }, 
    {
        path: 'impressum',
        loadComponent: () => import('./imprint/imprint.component').then(m => m.ImprintComponent)
    }
]
