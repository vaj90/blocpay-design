import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
  {
    path: 'pay-now',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren :  () => import('./layouts/default-layout/default-layout.module').then(m=>m.DefaultLayoutModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];