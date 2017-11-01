import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { VideoService } from './video.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
