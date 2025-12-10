import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { FichaComponent } from './ficha/ficha';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'ficha/:id', component: FichaComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];
