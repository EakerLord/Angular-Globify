import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'gl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor( @Inject(DOCUMENT) private document: any, private route: ActivatedRoute, private auth: AuthService) {
    this.auth.setToken(this.route.snapshot.queryParams['t']);
  }

  ocultarMostrar() {

    const menu = this.document.querySelector('#menu');
    const artist = this.document.querySelector('#artist');
    const arrow = this.document.querySelector('#arrow');

    if (artist.style.width === '65%') {
      menu.style.display = '';
      artist.style.width = '50%';
      arrow.firstElementChild.innerText = 'keyboard_arrow_left';
    } else {
      menu.style.display = 'none';
      artist.style.width = '65%';
      arrow.firstElementChild.innerText = 'keyboard_arrow_right';
    }
  }
}
