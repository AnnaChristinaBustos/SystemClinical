import { TestBed } from '@angular/core/testing';

import { HistoryClinicalService } from './history-clinical.service';

describe('HistoryClinicalService', () => {
  let service: HistoryClinicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryClinicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
