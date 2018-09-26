import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material';
import { RoutingModule } from './routing';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { MinecraftComponent } from './minecraft';
import { DashboardComponent } from './dashboard';
import { LoginComponent } from './login/login.component';
import { LoginButtonComponent } from './login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinecraftComponent,
    DashboardComponent,
    LoginComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
