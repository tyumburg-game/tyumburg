import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { CustomNotification, NewCustomNotification } from "./types";

type NotificationsState = {
  items: CustomNotification[];
};

const initialState: NotificationsState = {
  items: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NewCustomNotification>) => ({
      ...state,
      items: state.items.concat({ ...action.payload, id: uuidv4() }),
    }),
    clearNotifications: (state, action: PayloadAction<string>) => ({
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
    }),
  },
});

export const notificationsReducer = notificationsSlice.reducer;
export const notificationsActions = notificationsSlice.actions;
export const { setNotification, clearNotifications } = notificationsActions;
