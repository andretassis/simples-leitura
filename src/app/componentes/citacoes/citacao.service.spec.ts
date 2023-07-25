import { TestBed } from '@angular/core/testing';

import { CitacaoService } from './citacao.service';

describe('CitacaoService', () => {
  let service: CitacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
