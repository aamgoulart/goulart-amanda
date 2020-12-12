import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana02Component } from './semana02.component';

describe('Semana02Component', () => {
  let component: Semana02Component;
  let fixture: ComponentFixture<Semana02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semana02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Semana02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
