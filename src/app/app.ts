import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior';
import { BarraLateralComponent } from './barra-lateral/barra-lateral';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraSuperiorComponent, BarraLateralComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {}
