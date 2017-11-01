import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { VideoPageComponent } from './video-page.component';
import { VideoService } from '../video.service';
import { VideoFakeService } from '../video-fake.service';

describe('VideoPageComponent', () => {
  let component: VideoPageComponent;
  let fixture: ComponentFixture<VideoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPageComponent ],
      imports: [HttpModule],
      providers: [{provide: VideoService, useClass: VideoService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 video clips', async(() => {
    expect(component.videos.length).toBe(5);
  }));
});
