import { TestBed } from '@angular/core/testing';

import { InicioSercionService } from './inicio-sercion.service';

describe('InicioSercionService', () => {
  let service: InicioSercionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioSercionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
