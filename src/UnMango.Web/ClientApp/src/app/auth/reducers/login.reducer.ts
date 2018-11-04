import { LoginActions } from '../actions';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {
  }

  return state;
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
