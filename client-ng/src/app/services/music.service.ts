import { Injectable } from '@angular/core';
import { MusicProvider } from './musicProvider.interface';
import { SpotifyService } from './spotify.service';
import { Artist } from '../entities/artist';
import { Album } from '../entities/album';
import { Track } from '../entities/track';
import { User } from '../entities/user';
import { Observable } from 'rxjs';

@Injectable()
export class MusicService {
  provider: MusicProvider;

  constructor(spotify: SpotifyService) {
    this.provider = spotify;
  }

  public getTopArtistsFromUser(): Observable<Artist[]> {
    return this.provider.getTopArtistsFromUser();
  }

  public getArtist(): Observable<Artist[]> {
    return this.provider.getArtist();
  }

  public getAlbum(): Observable<Album[]> {
    return this.provider.getAlbums();
  }

  public getTracks(): Observable<Track[]> {
    return this.provider.getTracks();
  }

  public getUser(): Observable<User> {
    return this.provider.getUser();
  }
}
