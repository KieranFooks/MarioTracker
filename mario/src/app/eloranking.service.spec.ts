import { TestBed } from '@angular/core/testing';

import { ElorankingService } from './eloranking.service';

describe('ElorankingService', () => {
  let service: ElorankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElorankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
