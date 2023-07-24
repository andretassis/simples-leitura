import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralCitacaoComponent } from './mural-citacao.component';

describe('MuralCitacaoComponent', () => {
  let component: MuralCitacaoComponent;
  let fixture: ComponentFixture<MuralCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralCitacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
