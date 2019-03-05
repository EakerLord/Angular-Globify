import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { SpotifyService } from 'src/app/services/spotify.service';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor( private musicService: MusicService ) {
    this.musicService.getUser()
      .subscribe( user => {
        this.user = user;
      });
  }

  ngOnInit() {
  }
}
