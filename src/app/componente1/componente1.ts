import { Component } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion';

@Component({
  selector: 'app-component1',
  standalone: true,
    templateUrl: './componente1.html',
    styleUrls: ['./componente1.scss']
})
export class Component1Component {
  active = 'Home';

  constructor(private comunicacion: ComunicacionService) {}

  select(section: string) {
    this.active = section;
    this.comunicacion.changeSection(section);
  }
}