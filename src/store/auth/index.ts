import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "types/util";
import {
  SignInRequestData,
  SignUpRequestData,
  User,
} from "api/auth/auth-api.types";
import { authApi } from "api/auth/auth-api";
import { fetchUser } from "store/user";
import { AuthState } from "store/auth/types";

const initialState: AuthState = {
  user: null,
};

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error(error);

      return rejectWithValue("Unable to logout");
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data: SignInRequestData, { dispatch, rejectWithValue }) => {
    try {
      await authApi.signIn(data);
      dispatch(fetchUser());
    } catch (error: unknown) {
      console.error(error);

      return rejectWithValue((error as Error).message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: SignUpRequestData, { rejectWithValue }) => {
    try {
      await authApi.signUp(data);
    } catch (error: unknown) {
      console.error(error);

      return rejectWithValue((error as Error).message);
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
