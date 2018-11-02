import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule, AppStoreModule } from './shared';
import { RoutingModule } from './routing';

import * as app from './components';
import * as features from './features';

@NgModule({
  declarations: [AppComponent, ...app.components],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    AppStoreModule,
    ...features.modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
