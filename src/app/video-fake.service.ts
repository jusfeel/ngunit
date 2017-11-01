import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as Rx from 'rxjs';

@Injectable()
export class VideoFakeService {

  constructor() { }

  getVideos() {

    return Rx.Observable.of("a", "b", "c", "d", "e");
  }
}
