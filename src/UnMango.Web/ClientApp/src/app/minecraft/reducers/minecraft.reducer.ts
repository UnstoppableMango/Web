import { Action } from '@ngrx/store';
import { MinecraftActions, MinecraftActionTypes } from '../actions/minecraft.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: MinecraftActions): State {
  switch (action.type) {

    case MinecraftActionTypes.LoadMinecrafts:
      return state;


    default:
      return state;
  }
}
