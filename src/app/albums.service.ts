import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';

import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  private URL_BASE: string = 'https://api.spotify.com/v1/';

  constructor(private http: Http) { }

  getAlbum(id: string): Observable<Album> {
    const url: string = this.URL_BASE + `albums/${id}`;

    return this.http.get(url)
      .map((r: Response) => {
        const data: any = r.json();

        data.images.forEach((image) => {
          data[`image${image.width}`] = image.url;
        });

        return data as Album;
      });
  }
}
