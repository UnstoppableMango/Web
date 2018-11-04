import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { LOGIN, Login } from '../actions/auth.actions';
import { LoginSuccess, LoginFailure } from '../actions/login.actions';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(LOGIN),
    map(action => action.payload.credentials),
    exhaustMap((auth: Credentials) => this.authService.login(auth).pipe(
      map(user => new LoginSuccess({ user: user })),
      catchError(error => of(new LoginFailure({ error: error })))
    ))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
}
