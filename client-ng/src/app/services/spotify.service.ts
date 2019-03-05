import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User, Artist, Album, Track } from '../entities';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { MusicProvider } from './musicProvider.interface';

@Injectable()
export class SpotifyService implements MusicProvider {
  api = environment.spotify.url;
  httpOptions: {};

  constructor(private http: HttpClient, private auth: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.getToken()}`
      })
    };
  }

  public getTopArtistsFromUser(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.api}me/top/artists?limit=12`, this.httpOptions)
    .pipe(
      tap((artists: any) => console.log(artists)
      ),
      map((artists: any) => {
        let r: Artist[];
        if (artists.items.length > 0) {
          r = artists.items.map(artist => {
            return {
              id: artist.id,
              name: artist.name,
              image: this.getImage(artist)
            };

          });
        }
        return r;
      }),
      catchError(this.handleError<Artist[]>('getTopArtistsFromUser'))
    );
  }

  getArtist(): Observable<Artist[]> {
    console.log(this.http.get<Artist[]>(this.api + 'artist'));
    return this.http.get<Artist[]>(this.api + 'artist')
      .pipe(
        catchError(this.handleError<Artist[]>('getArtist'))
      );
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.api + 'albums')
      .pipe(
        catchError(this.handleError<Album[]>('getAlbums'))
      );
  }

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.api + 'tracks')
      .pipe(
        catchError(this.handleError<Track[]>('getTracks'))
      );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.api}me`, this.httpOptions)
      .pipe(
        map((user: any) => {
          return {
            id: user.id,
            name: user.display_name,
            country: user.country,
            email: user.email,
            image: this.getImage(user)
          };
        }),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  private getImage(data) {
    let img = './../assets/img/no-image.png';

    if (data.images.length > 0) {
      img = data.images[0].url;
    }

    return img;
  }

}
