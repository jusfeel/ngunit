import { TestBed, inject } from '@angular/core/testing';

import { VideoService } from './video.service';
import { HttpModule } from '@angular/http';

describe('VideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));

  it('should http load video', inject([VideoService], (service: VideoService) => {
    service.getVideos().subscribe( elem => {
      expect(elem.length).toEqual(5);
    });
  }));

});
