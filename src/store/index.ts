import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "store/user";
import { forumReducer } from "store/forum";
import { authReducer } from "store/auth";
import { notificationsReducer } from "store/notifications";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    topic: forumReducer,
    notifications: notificationsReducer,
  },
});
