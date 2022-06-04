import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "types/util";
import { User } from "api/auth/auth-api.types";
import { Actions } from "store/auth/actions";

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
    [Actions.SET_USER_ITEM]: (state, action: PayloadAction<User>) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const authReducer = authSlice.reducer;
