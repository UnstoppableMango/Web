import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Login } from '@app/auth/actions';
import { Credentials } from '@app/auth/models';

import * as fromAuth from '@app/auth/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  pending$ = this.store.pipe(select(fromAuth.getLoginPending));
  error$ = this.store.pipe(select(fromAuth.getLoginError));

  constructor(private store: Store<fromAuth.State>) { }

  onSubmit(credentials: Credentials) {
    this.store.dispatch(new Login({ credentials }));
  }

}
