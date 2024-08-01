import { TestBed } from '@angular/core/testing';

import { ReabilitadorService } from './reabilitador.service';

describe('ReabilitadorService', () => {
  let service: ReabilitadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReabilitadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
