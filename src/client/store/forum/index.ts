import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ForumState } from "store/forum/types";
import { RootState } from "../types";

import { forumApi } from "../../api/forum/forum-api";

const initialState: ForumState = {
  topics: null,
  status: "idle",
  error: null,
};

export const getTopics = createAsyncThunk(
  "forum/getTopics",
  (_, { rejectWithValue }) => {
    try {
      return forumApi.getTopics();
    } catch (error: unknown) {
      console.error(error);

      return rejectWithValue((error as Error).message);
    }
  }
);

export const forumSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopics.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getTopics.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        topics: action.payload,
      }))
      .addCase(getTopics.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message ?? null,
      }));
  },
});


export const forumReducer = forumSlice.reducer;

export const selectTopics = (state: RootState) => state.topics;
