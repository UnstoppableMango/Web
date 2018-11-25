import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Credentials, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Credentials): Observable<User> {
    return of({ name: 'Default User' });
  }

}
