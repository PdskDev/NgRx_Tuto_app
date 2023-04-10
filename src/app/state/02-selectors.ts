import { IRootState, IState } from './00-reducer';

import { createSelector } from '@ngrx/store';

const selectRoot = (state: IState) => state.root;

export const getUser = createSelector(
  selectRoot,
  (state: IRootState) => state.user
);
