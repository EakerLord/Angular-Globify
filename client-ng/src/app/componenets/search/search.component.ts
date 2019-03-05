import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buscar( cadena ) {

    // if (event.target.value.length > 0) {
    //   setTimeout(this.searchResult(event.target.value), 1000);
    // } else {
    //   this.artistList.innerHTML = '';
    //   this.getData();
    // }
  }
}
