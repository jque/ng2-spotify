import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css'],
  providers: [AlbumsService]
})
export class AlbumsDetailComponent implements OnInit {
  album: Album;

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];

    this.albumsService.getAlbum(id)
      .subscribe((album: Album) => {
        this.album = album;
      });
  }
}
