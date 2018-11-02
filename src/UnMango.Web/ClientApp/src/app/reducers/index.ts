import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

import * as fromLayout from './layout.reducer';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: Action): State => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getLayoutState = createFeatureSelector<State, fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav
);
