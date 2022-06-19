import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "store/user";
import { authReducer } from "store/auth";
import { notificationsReducer } from "store/notifications";

const initialState = window.__INITIAL_STATE__ || {};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    notifications: notificationsReducer,
  },
  preloadedState: initialState,
});
