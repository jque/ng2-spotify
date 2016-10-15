import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-albums-new-released',
  templateUrl: './albums-new-released.component.html',
  styleUrls: ['./albums-new-released.component.css'],
  providers: [AlbumsService]
})
export class AlbumsNewReleasedComponent implements OnInit {

  albums: Album[];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albumsService
      .newAlbums()
      .subscribe((albums: Album[]) => this.albums = albums);
  }
}
