import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';

import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-albums-search',
  templateUrl: './albums-search.component.html',
  styleUrls: ['./albums-search.component.css'],
  providers: [AlbumsService]
})
export class AlbumsSearchComponent implements OnInit {

  albums: Album[];

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .params
      .pluck('q')
      .subscribe((query: string) => this.search(query) );
  }

  private search(query: string) {
    this.albumsService
      .searchAlbums(query)
      .subscribe((albums: Album[]) => this.albums = albums);
  }
}
