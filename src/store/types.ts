import { AuthState } from "store/auth/types";

export interface BaseAction<T> {
  type: T;
}

export interface RootState {
  auth: AuthState;
}
