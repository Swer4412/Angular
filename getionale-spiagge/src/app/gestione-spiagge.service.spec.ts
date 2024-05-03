import { TestBed } from '@angular/core/testing';

import { GestioneSpiaggeService } from './gestione-spiagge.service';

describe('GestioneSpiaggeService', () => {
  let service: GestioneSpiaggeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneSpiaggeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
