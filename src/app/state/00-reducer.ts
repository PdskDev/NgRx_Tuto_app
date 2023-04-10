import { ActionReducer, MetaReducer, createReducer, on } from '@ngrx/store';
import { changeUsername, initAction } from './01-actions';

import { User } from '../models/user';

export interface IState {
  root: {
    appName: string;
    user: User;
  };
}

const initialState = {
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

export const rootReducer = createReducer(
  initialState,
  on(initAction, (state) => {
    return {
      ...state,
      user: {
        ...state.user,
        isAdmin: true,
      },
    };
  }),
  on(changeUsername, (state, props) => {
    return {
      ...state,
      user: {
        ...state.user,
        username: props.username,
      },
    };
  })
);
