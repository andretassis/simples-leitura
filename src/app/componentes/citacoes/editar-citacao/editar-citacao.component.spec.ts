import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCitacaoComponent } from './editar-citacao.component';

describe('EditarCitacaoComponent', () => {
  let component: EditarCitacaoComponent;
  let fixture: ComponentFixture<EditarCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCitacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
