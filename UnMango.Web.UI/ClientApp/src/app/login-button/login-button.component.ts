import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { AuthService } from '../shared/auth';
import { LoginDialogComponent } from './login-dialog';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit, OnDestroy {

  private readonly ngUnsubscribe = new Subject();

  text$ = new BehaviorSubject('Login');

  constructor(
    private auth: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onClick(): void {
    this.dialog.open(LoginDialogComponent)
      .beforeClose().pipe(
        takeUntil(this.ngUnsubscribe),
        tap(result => {
          if (result) {
            this.onSuccess();
          }
        })
      );
  }

  onSuccess(): void {
    const user = this.auth.getCurrentUser();

    if (user.name) {
      this.text$.next(user.name);
    }
  }

}
