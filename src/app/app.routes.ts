import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AnonimoComponent } from './layout/anonimo/anonimo.component/anonimo.component';

export const routes: Routes = [
  {
    path: '',
    component: AnonimoComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
        pathMatch: 'full',
      },
      {
        path: 'inicial',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
