import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/shared';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthEffects, LoginEffects, LogoutEffects } from './effects';
import { reducers } from '../reducers';

import { components, LogoutConfirmationDialogComponent } from './components';
import { containers } from './containers';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects, LoginEffects, LogoutEffects])
  ],
  declarations: [...components, ...containers],
  entryComponents: [LogoutConfirmationDialogComponent]
})
export class AuthModule { }
