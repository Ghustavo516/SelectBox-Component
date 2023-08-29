import { TestBed } from '@angular/core/testing';

import { CidadeEstadoService } from './cidade-estado.service';

describe('CidadeEstadoService', () => {
  let service: CidadeEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
