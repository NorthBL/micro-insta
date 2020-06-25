import { TestBed, async, inject } from '@angular/core/testing';

import { PhotodetailGuard } from './photodetail.guard';

describe('PhotodetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotodetailGuard]
    });
  });

  it('should ...', inject([PhotodetailGuard], (guard: PhotodetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
