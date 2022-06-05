import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "types/util";
import { User } from "api/auth/auth-api.types";

export type AuthState = {
  user: Nullable<User>;
};

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Nullable<User>>) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const { setUser } = authActions;
