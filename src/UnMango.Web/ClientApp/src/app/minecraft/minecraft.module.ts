import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/shared';
import { RoutingModule } from './minecraft-routing.module';
import { containers } from './containers';
import { components } from './components';

@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule
  ]
})
export class MinecraftModule { }
