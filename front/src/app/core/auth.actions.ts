import { createAction, props } from '@ngrx/store';

export const setToken = createAction(
  '[Auth] Set Token',
  props<{ token: string }>()
);

export const resetToken = createAction('[Auth] Reset Token');

export const setUserType = createAction(
  '[Auth] Set userType',
  props<{ userType: string }>()
);

export const resetUserType = createAction('[Auth] Reset userType');
