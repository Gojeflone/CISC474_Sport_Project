import { TestBed } from '@angular/core/testing';

import { RequestmanService } from './requestman.service';

describe('RequestmanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestmanService = TestBed.get(RequestmanService);
    expect(service).toBeTruthy();
  });
});
