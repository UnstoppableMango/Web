import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CloseSidenav } from 'src/app/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new CloseSidenav());
  }

}
