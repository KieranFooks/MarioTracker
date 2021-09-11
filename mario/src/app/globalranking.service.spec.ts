import { TestBed } from '@angular/core/testing';

import { GlobalrankingService } from './globalranking.service';

describe('GlobalrankingService', () => {
  let service: GlobalrankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalrankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
