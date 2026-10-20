import { TestBed } from '@angular/core/testing';

import { Football } from './football';

describe('Football', () => {
  let service: Football;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Football);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
