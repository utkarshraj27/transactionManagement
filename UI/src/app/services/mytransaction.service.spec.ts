import { TestBed } from '@angular/core/testing';

import { MytransactionService } from './mytransaction.service';

describe('MytransactionService', () => {
  let service: MytransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
