import { TestBed } from '@angular/core/testing';

import { StashesService } from './stashes.service';

describe('StashesService', () => {
  let service: StashesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StashesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
