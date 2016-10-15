import { Injectable } from '@angular/core';
import { Response, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';

import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  private URL_BASE: string = 'https://api.spotify.com/v1/';

  constructor(private http: Http) { }

  newAlbums(): Observable<Album[]> {
    const params = new URLSearchParams();

    params.set('q', 'tag:new');

    return this.getAlbums(params);
  }

  searchAlbums(query: string): Observable<Album[]> {
    const params = new URLSearchParams();

    params.set('q', `artist:${query}`);

    return this.getAlbums(params);
  }

  getAlbums(params: URLSearchParams): Observable<Album[]> {
    const url: string = this.URL_BASE + 'search';

    params.set('type', 'album');

    return this.http
      .get(url, { search: params })
      .map((r: Response) => {
        const data: any = r.json();
        const items: any[] = data.albums.items;

        return items.map((item: any) => this.jsonDataToAlbum(item));
      });
  }

  getAlbum(id: string): Observable<Album> {
    const url: string = this.URL_BASE + `albums/${id}`;

    return this.http
      .get(url)
      .map((r: Response) => {
        const data: any = r.json();

        return this.jsonDataToAlbum(data);
      });
  }

  private jsonDataToAlbum(data: any): Album {
    data.images.forEach((image) => {
      data[`image${image.width}`] = image.url;
    });

    return data as Album;
  }
}
