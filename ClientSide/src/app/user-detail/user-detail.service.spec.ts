import { TestBed } from '@angular/core/testing';

import { UserDetailService } from './user-detail.service';

describe('UserDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDetailService = TestBed.get(UserDetailService);
    expect(service).toBeTruthy();
  });
});
