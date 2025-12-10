import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Vista = 'inicio' | 'busqueda' | 'html';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private vistaActual = new BehaviorSubject<Vista>('inicio');
  vista$ = this.vistaActual.asObservable();

  cambiarVista(vista: Vista) {
    this.vistaActual.next(vista);
  }
}
