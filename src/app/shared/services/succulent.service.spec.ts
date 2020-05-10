import { TestBed } from '@angular/core/testing';

import { SucculentService } from './succulent.service';

describe('SucculentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SucculentService = TestBed.get(SucculentService);
    expect(service).toBeTruthy();
  });
});
