import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/entities/artist';
import { SpotifyService } from 'src/app/services/spotify.service';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artists: Artist[] = [];

  constructor( private musicService: MusicService ) {}

  ngOnInit() {
    this.musicService.getTopArtistsFromUser()
    .subscribe( artists => {
      this.artists = artists;
    });
  }
}
