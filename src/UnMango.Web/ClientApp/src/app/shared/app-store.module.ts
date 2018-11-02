import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from '../reducers';
import { AppEffects } from '../app.effects';
import * as fromUser from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';

@NgModule({
  imports: [
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature('user', fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [StoreModule]
})
export class AppStoreModule { }
