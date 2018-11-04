import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-logout-confirmation-dialog',
  templateUrl: './logout-confirmation-dialog.component.html',
  styleUrls: ['./logout-confirmation-dialog.component.css']
})
export class LogoutConfirmationDialogComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
