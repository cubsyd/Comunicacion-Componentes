import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoService, Vista } from '../servicios/estado';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-superior.html',
  styleUrls: ['./barra-superior.scss'],
})
export class BarraSuperiorComponent {
  vistaActual: Vista = 'inicio';

  constructor(private estadoService: EstadoService) {
    this.estadoService.vista$.subscribe((v) => (this.vistaActual = v));
  }

  seleccionar(vista: Vista) {
    this.estadoService.cambiarVista(vista);
  }
}
