import {
  ActionReducerMap, createFeatureSelector, createSelector
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromMinecraft from './minecraft.reducer';

export interface MinecraftState {
  minecraft: fromMinecraft.State;
}

export interface State extends fromRoot.State {
  minecraft: MinecraftState;
}

export const reducers: ActionReducerMap<MinecraftState> = {
  minecraft: fromMinecraft.reducer
};

export const getMinecraftState = createFeatureSelector<State, MinecraftState>('minecraft');

export const getMinecraftStatusState = createSelector(
  getMinecraftState,
  (state: MinecraftState) => state.minecraft
);
