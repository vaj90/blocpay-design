import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const AppRoutes: Routes = [
  {
    path: 'default',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren :  () => import('./layouts/default-layout/default-layout.module').then(m=>m.DefaultLayoutModule)
      }
    ]
  }
];