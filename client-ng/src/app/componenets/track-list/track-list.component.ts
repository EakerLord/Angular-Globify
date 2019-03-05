import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../entities';
import { SpotifyService } from '../../services/spotify.service';
import { Utils } from '../../../common';

@Component({
  selector: 'gl-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  tracks: Track[] = [];
  trackCiclo: Track;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getTracks();
  }

  getTracks(): void {
    this.spotifyService.getTracks()
        .subscribe(tracks => this.tracks = tracks);
  }

  trackTime( num: number) {
    return Utils.msToMinutes(num);
  }
}
