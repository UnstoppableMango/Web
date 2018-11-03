import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  authenticated: boolean;
}

export const initialState: State = {
  authenticated: false
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoadAuths:
      return state;
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: State) => state.authenticated;
