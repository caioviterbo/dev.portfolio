import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Routes } from '@angular/router';
import { Overview } from './pages/overview/overview';
import { Projects } from './pages/projects/projects';


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
    path: 'contato', component: Contact
  },
  {
    path: 'sobre', component: About
  },
];
