import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sena } from './sena';

describe('Sena', () => {
  let component: Sena;
  let fixture: ComponentFixture<Sena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
