import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

import { Logout, LogoutConfirmationDismiss, LOGOUT_CONFIRMATION } from '../actions';
import { LogoutConfirmationDialogComponent } from '../components';

@Injectable()
export class LogoutEffects {

  @Effect()
  logoutConfirmation$ = this.actions$.pipe(
    ofType(LOGOUT_CONFIRMATION),
    exhaustMap(() => {
      const dialogRef = this.dialog.open<
        LogoutConfirmationDialogComponent,
        undefined,
        boolean
        >(LogoutConfirmationDialogComponent);

      return dialogRef.afterClosed();
    }),
    map(result => result
      ? new Logout()
      : new LogoutConfirmationDismiss()
    )
  );

  constructor(
    private actions$: Actions,
    private dialog: MatDialog
  ) { }

}
