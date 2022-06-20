import { TestBed } from '@angular/core/testing';

import { OnselectService } from './onselect.service';

describe('OnselectService', () => {
  let service: OnselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
