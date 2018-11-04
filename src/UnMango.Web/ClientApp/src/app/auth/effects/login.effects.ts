import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LOGOUT, LOGIN_REDIRECT, LOGIN_SUCCESS } from '../actions/auth.actions';

@Injectable()
export class LoginEffects {

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(LOGIN_SUCCESS),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(LOGIN_REDIRECT, LOGOUT),
    tap(authed => this.router.navigate(['/login']))
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) { }

}
