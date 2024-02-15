import { TestBed } from '@angular/core/testing';

import { WorkSpaceService } from './work-space.service';

describe('WorkSpaceService', () => {
  let service: WorkSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
