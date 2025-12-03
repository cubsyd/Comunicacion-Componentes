import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './componente1';
import { Componente2 } from './componente2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1, Componente2],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('comunicacion-componentes');
}
