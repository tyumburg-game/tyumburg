import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { authReducer } from "./auth";
import { notificationsReducer } from "./notifications";

declare global {
  interface Window {
    __INITIAL_STATE__: any;
  }
}

export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export function createStore(initialState: any = {}) {
  const preloadedState =
    (!isServer && window.__INITIAL_STATE__) || initialState;

  return configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      notifications: notificationsReducer,
    },
    preloadedState,
  });
}

export const store = createStore();
