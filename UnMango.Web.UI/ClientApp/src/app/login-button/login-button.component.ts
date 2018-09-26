import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  text = 'Login';

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

}
