import {
  Action,
  ActionReducer,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { changeUsername, initAction } from './01-actions';

import { User } from '../models/user';

export const ROOT_FEATURE_KEY = 'root';

export interface IState {
  readonly [ROOT_FEATURE_KEY]: IRootState;
}

export interface IRootState {
  appName: string;
  user: User;
}

const initialState: IRootState = {
  appName: 'NgRx',
  user: {
    username: '',
    isAdmin: false,
  },
};

function log(reducer: ActionReducer<IState>): ActionReducer<IState> {
  return (state, action) => {
    const currentState = reducer(state, action);

    console.groupCollapsed(action.type);
    console.log('Etat précédent: ', state);
    console.log('Action: ', action);
    console.log('Etat suivant: ', currentState);
    console.groupEnd();

    return currentState;
  };
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer<IRootState, Action>(
  initialState,
  on(initAction, (state: IRootState) => {
    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true,
      },
    };
  }),
  on(changeUsername, (state: IRootState, props) => {
    return {
      ...state,
      user: {
        ...state.user,
        username: props.username,
      },
    };
  })
);
