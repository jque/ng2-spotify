import { Component, Input } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
})
export class AlbumsListComponent {
  @Input() albums: Album[];
}
