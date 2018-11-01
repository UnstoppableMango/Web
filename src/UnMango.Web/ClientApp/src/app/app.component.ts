import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenavContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'app';

  @ViewChild(MatSidenavContainer)
  sidenavContainer: MatSidenavContainer;

  ngAfterViewInit() {
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() => /* react to scrolling */{});
  }

}
