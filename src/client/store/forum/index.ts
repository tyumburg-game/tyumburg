import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ForumState } from "store/forum/types";
import { forumApi } from "../../api/forum/forum-api";
import {RootState} from '../types';

const initialState: ForumState = {
  topic: null,
  status: "idle",
  error: null,
};

export const getTopic = createAsyncThunk(
  "forum/getTopic",
  async (_, { rejectWithValue }) => {
    try {
      return await forumApi.getTopics();
    } catch (error: unknown) {
      console.error(error);

      return rejectWithValue((error as Error).message);
    }
  }
);

export const forumSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopic.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getTopic.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        topic: action.payload,
      }))
      .addCase(getTopic.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message ?? null,
      }));
  },
});

export const forumReducer = forumSlice.reducer;

export const selectTopic = (state: RootState) => state.topic;
