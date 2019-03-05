import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const me = [
      {
        id: 1,
        name: 'Cosme Fulanito',
        email: 'cf@gmail.com',
        country: 'AR',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      }
    ];
    const artists = [
      {
        id: 1,
        name: 'Queen',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 2,
        name: 'Mago de Oz',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 3,
        name: 'Iron Maiden',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 4,
        name: 'Metallica',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 5,
        name: 'Mike Oldfiled',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 6,
        name: 'Choppin',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      }
    ];
    const albums = [
      {
        id: 1,
        name: 'Back in Black',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 1,
        name: 'Reload',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 3,
        name: 'Sacrament',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 4,
        name: 'Finisterra',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 5,
        name: 'Fear of the dark',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      },
      {
        id: 6,
        name: 'Master of Puppets',
        image: 'http://placehold.jp/d9e2eb/003366/90x90.png?text=No%20Image'
      }
    ]
    const tracks = [
      {
        id: 1,
        name: 'Turn the page',
        duration: 564,
        trackNumber: 1
      },
      {
        id: 2,
        name: 'Rage',
        duration: 5645,
        trackNumber: 15
      }
    ];

    return {me, artists, albums, tracks};
  }

}
