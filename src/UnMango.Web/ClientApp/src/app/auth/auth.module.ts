import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from 'src/app/shared';
import { AuthRoutingModule } from './auth-routing.module';
import { LogoutConfirmationDialogComponent } from './components';
import { LoginComponent } from './containers';
import { AuthEffects, LoginEffects, LogoutEffects } from './effects';
import { reducers } from '../reducers';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects, LoginEffects, LogoutEffects])
  ],
  declarations: [LoginComponent, LogoutConfirmationDialogComponent],
  entryComponents: [LogoutConfirmationDialogComponent]
})
export class AuthModule { }
