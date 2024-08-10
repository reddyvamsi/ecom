import { Action, createReducer, on } from '@ngrx/store';
import { incrementAction, decrementAction, resetAction } from './ecom.action';

export const initialState = 0;
const reducerCounter = createReducer(
  initialState,
  on(incrementAction, (state) => state + 1),
  on(decrementAction, (state) => state - 1),
  on(resetAction, () => 0)
);

export function reducerFunction(action: number | undefined, state: Action) {
  return reducerCounter(action, state);
}
