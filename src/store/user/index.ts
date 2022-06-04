import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Nullable } from "types/util";
import { User } from "api/auth/auth-api.types";
import { authApi } from "api/auth/auth-api";
import type { RootState } from "store/types";

interface UserState {
  user: Nullable<User>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: Nullable<string>;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () =>
  authApi.getUser()
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchUser.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        user: action.payload,
      }))
      .addCase(fetchUser.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message ?? null,
      }));
  },
});

export const userReducer = userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
