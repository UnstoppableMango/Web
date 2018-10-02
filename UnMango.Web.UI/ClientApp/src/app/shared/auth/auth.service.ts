import { Injectable } from '@angular/core';

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getCurrentUser(): User {
    return { name: 'Friendly Name' };
  }
}
