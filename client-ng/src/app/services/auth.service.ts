import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: string;

  constructor() {
  }

  public setToken(token) {
    this.token = token;
  }

  public getToken() {
    if (!this.token) {
      console.error('Token no seteado');
    }
    return this.token;
  }
}
