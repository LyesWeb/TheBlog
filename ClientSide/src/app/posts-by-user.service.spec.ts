import { TestBed } from '@angular/core/testing';

import { PostsByUserService } from './posts-by-user/posts-by-user.service';

describe('PostsByUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsByUserService = TestBed.get(PostsByUserService);
    expect(service).toBeTruthy();
  });
});
