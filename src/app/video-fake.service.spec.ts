import { TestBed, inject } from '@angular/core/testing';

import { VideoFakeService } from './video-fake.service';

describe('VideoFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoFakeService]
    });
  });

  it('should be created', inject([VideoFakeService], (service: VideoFakeService) => {
    expect(service).toBeTruthy();
  }));
});
