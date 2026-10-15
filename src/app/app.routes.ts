import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AnonimoComponent } from './layout/anonimo/anonimo.component/anonimo.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { EventosComponent } from './components/eventos/eventos.component';

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
        path: 'sobre',
        component: SobreComponent,
      },
      {
        path: 'eventos',
        component: EventosComponent,
      },
    ],
  },
];

