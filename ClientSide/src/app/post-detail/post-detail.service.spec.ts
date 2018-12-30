import { TestBed } from '@angular/core/testing';

import { PostDetailService } from './post-detail.service';

describe('PostDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostDetailService = TestBed.get(PostDetailService);
    expect(service).toBeTruthy();
  });
});
