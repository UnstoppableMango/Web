import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/shared';
import { RoutingModule } from './minecraft-routing.module';

import { reducers } from './reducers';
import { effects } from './effects';

import { containers } from './containers';
import { components } from './components';

@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,
    StoreModule.forFeature('minecraft', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class MinecraftModule { }
