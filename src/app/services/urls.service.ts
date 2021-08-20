import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  constructor() {}

  addUrl(url: String) {
    var body = {
      longUrl: url,
    };

    return axios
      .post(environment.apiUrl + '/shorten', body)
      .then((r) => r.data);
  }
}
