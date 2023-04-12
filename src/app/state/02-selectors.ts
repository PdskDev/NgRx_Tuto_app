import { IRootState, IState, ROOT_FEATURE_KEY } from './00-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

//const selectRoot = (state: IState) => state.root;
const selectRoot = createFeatureSelector<IRootState>(ROOT_FEATURE_KEY);

export const getUser = createSelector(
  selectRoot,
  (state: IRootState) => state.user
);
