import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { LOGIN } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(LOGIN)
  );

  constructor(private actions$: Actions) {}
}
