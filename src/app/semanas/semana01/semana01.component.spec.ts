import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semana01Component } from './semana01.component';

describe('Semana01Component', () => {
  let component: Semana01Component;
  let fixture: ComponentFixture<Semana01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semana01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Semana01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
