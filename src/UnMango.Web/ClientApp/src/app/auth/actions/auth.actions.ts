import { Action } from '@ngrx/store';

import { Credentials } from '../models';

export const LOGIN = '[Auth] Login';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { credentials: Credentials }) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions =
  | Login
  | Logout;
