import { Routes } from '@angular/router';
import { Overview } from './pages/overview/overview';
import { Projects } from './pages/projects/projects';
import { Contato } from './pages/contato/contato';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  {
    path: '', component: Overview
  },
  {
    path: 'inicio', component: Overview
  },
  {
    path: 'projetos', component: Projects
  },
  {
    path: 'contato', component: Contato
  },
  {
    path: 'sobre', component: Sobre
  },
];
