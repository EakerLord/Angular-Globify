import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/entities/album';

@Component({
  selector: 'gl-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album;
  mostrarTracks = false;

  constructor() { }

  ngOnInit() {
  }

  ocultarTracks() {
    this.mostrarTracks = !this.mostrarTracks;
  }
}
