import { AuthActions, LOGIN_SUCCESS, LOGOUT } from '../actions/auth.actions';
import { User } from '../models';

export interface State {
  user: User | null;
  authenticated: boolean;
}

export const initialState: State = {
  user: null,
  authenticated: false
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        authenticated: true
      };
    case LOGOUT:
      return initialState;
  }

  return state;
}

export const getUser = (state: State) => state.user;
export const getIsAuthenticated = (state: State) => state.authenticated;
