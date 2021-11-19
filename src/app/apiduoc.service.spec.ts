import { TestBed } from '@angular/core/testing';

import { ApiduocService } from './apiduoc.service';

describe('ApiduocService', () => {
  let service: ApiduocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiduocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
