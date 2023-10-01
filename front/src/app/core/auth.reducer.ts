import { createReducer, on } from '@ngrx/store';
import {
  setToken,
  resetToken,
  setUserType,
  resetUserType,
} from './auth.actions';

export interface AuthState {
  token: string | null;
  userType: string | null;
}
export const initialState: AuthState = {
  token: null,
  userType: null,
};

export const authReducer = createReducer(
  initialState,
  on(setToken, (state, { token }) => ({ ...state, token })),
  on(resetToken, (state) => ({ ...state, token: null })),
  on(setUserType, (state, { userType }) => ({ ...state, userType })),
  on(resetUserType, (state) => ({ ...state, userType: null }))
);
