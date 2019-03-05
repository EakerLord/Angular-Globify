import { Component, OnInit } from '@angular/core';
import { Album } from '../../entities/album';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'gl-album-aside',
  templateUrl: './album-aside.component.html',
  styleUrls: ['./album-aside.component.scss']
})
export class AlbumAsideComponent implements OnInit {

  albums: Album[] = [];
  album: Album;

  constructor( private spotifyService: SpotifyService ) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(): void {
    this.spotifyService.getAlbums()
        .subscribe(albums => this.albums = albums);
  }

}
