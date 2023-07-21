import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCitacaoComponent } from './criar-citacao.component';

describe('CriarCitacaoComponent', () => {
  let component: CriarCitacaoComponent;
  let fixture: ComponentFixture<CriarCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCitacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
