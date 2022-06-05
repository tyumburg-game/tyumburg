import { store } from "./index";

export interface BaseAction<T> {
  type: T;
  payload?: any;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
