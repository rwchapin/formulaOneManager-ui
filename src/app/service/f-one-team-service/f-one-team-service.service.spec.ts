import { TestBed } from '@angular/core/testing';

import { FOneTeamServiceService } from './f-one-team-service.service';

describe('FOneTeamServiceService', () => {
  let service: FOneTeamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FOneTeamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
