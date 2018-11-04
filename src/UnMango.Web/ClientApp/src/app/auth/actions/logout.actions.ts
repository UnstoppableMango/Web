import { Action } from '@ngrx/store';

export const LOGOUT_CONFIRMATION = '[Logout] Logout Confirmation';
export const LOGOUT_CONFIRMATION_DISMISS = '[Logout] Logout Confirmation Dismiss';

export class LogoutConfirmation implements Action {
  readonly type = LOGOUT_CONFIRMATION;
}

export class LogoutConfirmationDismiss implements Action {
  readonly type = LOGOUT_CONFIRMATION_DISMISS;
}

export type LogoutActions =
  | LogoutConfirmation
  | LogoutConfirmationDismiss;
