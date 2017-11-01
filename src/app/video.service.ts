import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { VIMEO_API_URL } from '../config';

import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  private apiUrl : string = VIMEO_API_URL;

  constructor(private http: Http) {}

  getVideos() {
    return this.http.get(`${this.apiUrl}/videos`)
                    .map(res => res.json().data);
  }
}
