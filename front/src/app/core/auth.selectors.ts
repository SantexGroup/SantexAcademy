import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// Crear un selector para obtener el estado de autenticación
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Crear un selector para obtener el token del estado de autenticación
export const selectToken = createSelector(
  selectAuthState,
  (authState) => authState.token
);

export const selectUserType = createSelector(
  selectAuthState,
  (authState) => authState.userType
);
