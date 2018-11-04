import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './effects/login.effects';
import { LogoutEffects } from './effects/logout.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([LoginEffects, LogoutEffects])
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
