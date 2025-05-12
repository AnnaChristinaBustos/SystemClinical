import { TestBed } from '@angular/core/testing';

import { AppoimentService } from './appoiment.service';

describe('AppoimentService', () => {
  let service: AppoimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppoimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
