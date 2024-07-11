import { TestBed } from '@angular/core/testing';

import { PrenotazioneService } from './prenotazione.service';

describe('NoleggioService', () => {
  let service: PrenotazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrenotazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
