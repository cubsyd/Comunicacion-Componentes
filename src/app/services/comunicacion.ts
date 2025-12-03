import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicacionService {
  private sectionSubject = new BehaviorSubject<string>('Home');
  section$ = this.sectionSubject.asObservable();

  changeSection(section: string) {
    this.sectionSubject.next(section);
    console.log('Sección cambiada:', section);
  }
}
