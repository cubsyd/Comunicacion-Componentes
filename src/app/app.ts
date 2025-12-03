import { Component } from '@angular/core';
import { Component1Component } from './componente1/componente1';
import { Component2Component } from './componente2/componente2';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Component1Component, Component2Component, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}