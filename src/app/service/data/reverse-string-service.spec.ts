import { TestBed } from '@angular/core/testing';

import { ReverseStringService } from './reverse-string-service';

describe('ReverseStringService', () => {
  let service: ReverseStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
