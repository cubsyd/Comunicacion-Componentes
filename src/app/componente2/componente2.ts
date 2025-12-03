import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component2',
  standalone: true,
  templateUrl: './componente2.html',
  styleUrls: ['./componente2.scss']
})
export class Component2Component implements OnInit {
  title = 'Home';
  options: string[] = [];
  active = '';

  constructor(private comunicacion: ComunicacionService, private router: Router) {}

  ngOnInit() {
    this.comunicacion.section$.subscribe(section => {
      this.title = section;
      this.setOptions(section);
    });
  }

  setOptions(section: string) {
    if (section === 'Home') {
      this.options = ['Home', 'SENA', 'Ficha 3006474'];
    } else if (section === 'SENA') {
      this.options = ['SENA', 'Presentación', 'Otra opción'];
    } else if (section === 'Ficha') {
      this.options = ['Ficha 3006474', 'Ficha 3000000', 'Otra opción'];
    }
  }

  navigate(option: string) {
    this.active = option;
    this.router.navigate([option.toLowerCase().replace(/\s+/g, '')]);
  }
}