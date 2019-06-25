import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromAuth from './auth.reducer';
import * as fromLogin from './login.reducer';

export interface AuthState {
  status: fromAuth.State;
  login: fromLogin.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.reducer,
  login: fromLogin.reducer,
};

export const getAuthState = createFeatureSelector<State, AuthState>('auth');

export const getAuthStatusState = createSelector(
  getAuthState,
  (state: AuthState) => state.status
);
export const getUser = createSelector(getAuthStatusState, fromAuth.getUser);
export const getIsAuthenticated = createSelector(getAuthStatusState, fromAuth.getIsAuthenticated);

export const getLoginState = createSelector(
  getAuthState,
  (state: AuthState) => state.login
);
export const getLoginError = createSelector(getLoginState, fromLogin.getError);
export const getLoginPending = createSelector(getLoginState, fromLogin.getPending);
