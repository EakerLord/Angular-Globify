import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './componenets/profile/profile.component';
import { MenuComponent } from './componenets/menu/menu.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { SearchComponent } from './componenets/search/search.component';
import { ArtistComponent } from './componenets/artist/artist.component';
import { PlayerComponent } from './componenets/player/player.component';
import { AlbumComponent } from './componenets/album/album.component';
import { TrackListComponent } from './componenets/track-list/track-list.component';
import { AlbumAsideComponent } from './componenets/album-aside/album-aside.component';

import { SpotifyService } from './services/spotify.service';
import { MusicService } from './services/music.service';

import { HttpClientJsonpModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';

// D Creo un const de los imports donde posteriormente depsues los plancho con "..." en NgModule, asi ahoora
// lineas y sobretodo no duplico codigo.
const componentsDeclarations = [
  AppComponent,
  ProfileComponent,
  MenuComponent,
  NavbarComponent,
  SearchComponent,
  ArtistComponent,
  PlayerComponent,
  AlbumComponent,
  TrackListComponent,
  AlbumAsideComponent
];

// D Para proyectos grandes modularizar el app.modules.ts por cuestion de orden, los sub-modules van en los
// componentes generales de la aplicacion.

@NgModule({
  declarations: [
    ...componentsDeclarations,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    // -------------------
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [SpotifyService, MusicService],
  bootstrap: [AppComponent],
})
export class AppModule { }
