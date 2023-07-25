import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCitacaoComponent } from './excluir-citacao.component';

describe('ExcluirCitacaoComponent', () => {
  let component: ExcluirCitacaoComponent;
  let fixture: ComponentFixture<ExcluirCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirCitacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
