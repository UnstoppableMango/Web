import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MinecraftActionTypes } from '../actions/minecraft.actions';

@Injectable()
export class MinecraftEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(MinecraftActionTypes.LoadMinecrafts));

  constructor(private actions$: Actions) {}
}
