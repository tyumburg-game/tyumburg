import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "types/util";
import { User } from "api/auth/auth-api.types";
import { authApi } from "api/auth/auth-api";

export type AuthState = {
  user: Nullable<User>;
};

const initialState: AuthState = {
  user: null,
};

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
    } catch (error) {
      console.log(error);

      return rejectWithValue("Unable to logout");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Nullable<User>>) => ({
      ...state,
      user: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => ({
      ...state,
      user: null,
    }));
    builder.addCase(logout.rejected, (state) => ({
      ...state,
      user: null,
    }));
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const { setUser } = authActions;
