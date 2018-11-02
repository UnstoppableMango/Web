import {
  LayoutActions,
  OPEN_SIDENAV,
  CLOSE_SIDENAV
} from '../actions/layout.actions';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: true
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    case OPEN_SIDENAV:
      return {
        ...state,
        showSidenav: true
      };
    case CLOSE_SIDENAV:
      return {
        ...state,
        showSidenav: false
      };
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
