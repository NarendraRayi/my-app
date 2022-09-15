import { TestBed } from '@angular/core/testing';

import { MediapostService } from './mediapost.service';

describe('MediapostService', () => {
  let service: MediapostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediapostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
