import { createAction } from '@ngrx/store';

export const incrementAction = createAction('[Counter] Increment'); // action for increasing the count
export const decrementAction = createAction('[Counter] Decrement'); // action for reducing the count
export const resetAction = createAction('[Counter] Reset');
