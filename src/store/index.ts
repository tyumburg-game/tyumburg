import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "store/user";
import { authReducer } from "store/auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
