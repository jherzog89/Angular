import { TestBed } from '@angular/core/testing';

import { ReverseWordsService } from './reverse-words-service';

describe('ReverseWordsService', () => {
  let service: ReverseWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
