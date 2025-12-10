import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ficha.html',
  styleUrls: ['./ficha.scss'],
})
export class FichaComponent {
  idFicha: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.idFicha = this.route.snapshot.paramMap.get('id');
  }
}
