import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatSidenavContainer } from '@angular/material';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'app';

  headerHeight = 64;

  authenticated$: Observable<boolean>;

  @ViewChild(MatSidenavContainer)
  sidenavContainer: MatSidenavContainer;

  ngOnInit(): void {
    this.authenticated$ = of(true);
  }

  ngAfterViewInit() {
    this.sidenavContainer.scrollable.elementScrolled()
      .subscribe(() => /* react to scrolling */{});
  }

}
