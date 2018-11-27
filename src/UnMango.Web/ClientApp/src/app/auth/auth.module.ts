import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/shared';
import { AuthRoutingModule } from './auth-routing.module';

import { effects } from './effects';
import { reducers } from './reducers';

import { components, entryComponents } from './components';
import { containers } from './containers';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...components, ...containers],
  entryComponents: entryComponents
})
export class AuthModule { }
