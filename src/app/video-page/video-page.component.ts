import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {

  videos: string[] = ["a","a","a","a","a"];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    // this.videoService.getVideos()
    //     .subscribe(videos => this.videos = videos);
  }

}
