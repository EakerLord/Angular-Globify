import { Track } from '../entities/track';
import { Album } from '../entities/album';
import { Artist } from '../entities/artist';
import { User } from '../entities/user';
import { Observable } from 'rxjs';

export interface MusicProvider {
  getTopArtistsFromUser(): Observable<Artist[]>;
  getArtist(): Observable<Artist[]>;
  getTracks(): Observable<Track[]>;
  getAlbums(): Observable<Album[]>;
  getUser(): Observable<User>;
}
