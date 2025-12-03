import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SenaComponent } from './pages/sena/sena';
import { FichaComponent } from './pages/ficha/ficha';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sena', component: SenaComponent },
  { path: 'ficha3006474', component: FichaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
