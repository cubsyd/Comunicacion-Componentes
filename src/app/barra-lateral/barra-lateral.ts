import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EstadoService, Vista } from '../servicios/estado';

@Component({
  selector: 'app-barra-lateral',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './barra-lateral.html',
  styleUrls: ['./barra-lateral.scss'],
})
export class BarraLateralComponent {
  vistaActual: Vista = 'inicio';

  constructor(private estadoService: EstadoService) {
    this.estadoService.vista$.subscribe((vista) => {
      this.vistaActual = vista;
    });
  }
}
