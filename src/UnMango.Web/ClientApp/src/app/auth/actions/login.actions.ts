import { Action } from '@ngrx/store';

import { User } from '../models';

export const LOGIN_SUCCESS = '[Login] Login Success';
export const LOGIN_FAILURE = '[Login] Login Failure';

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: { user: User }) { }
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(public payload: { error: any }) { }
}

export type LoginActions =
  | LoginSuccess
  | LoginFailure;
