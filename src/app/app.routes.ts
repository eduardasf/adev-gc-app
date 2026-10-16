import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AnonimoComponent } from './layout/anonimo/anonimo.component/anonimo.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { MinisteriosComponent } from './components/ministerios/ministerios.component';
import { ContribuaComponent } from './components/contribua/contribua.component';
import { ContatoComponent } from './components/contato/contato.component';

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
      {
        path: 'ministerios',
        component: MinisteriosComponent,
      },
      {
        path: 'contribua',
        component: ContribuaComponent,
      },
      {
        path: 'contato',
        component: ContatoComponent,
      },
    ],
  },
];

