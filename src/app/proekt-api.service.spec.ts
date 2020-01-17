import { TestBed } from '@angular/core/testing';

import { ProektApiService } from './proekt-api.service';

describe('ProektApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProektApiService = TestBed.get(ProektApiService);
    expect(service).toBeTruthy();
  });
});
